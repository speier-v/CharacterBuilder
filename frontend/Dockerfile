#    Copyright (c) 2023 Contributors to the Eclipse Foundation
#
#    See the NOTICE.md file(s) distributed with this work for additional
#    information regarding copyright ownership.
#
#    This program and the accompanying materials are made available under the
#    terms of the Apache License, Version 2.0 which is available at
#    https://www.apache.org/licenses/LICENSE-2.0.
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
#    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
#    License for the specific language governing permissions and limitations
#    under the License.
#
#    SPDX-License-Identifier: Apache-2.0
#    Modifications made by developers of Charactyr, 2024.

# STAGE 1: Build
FROM node:lts-alpine AS builder

# Copy dependencies info
COPY ./frontend/package.json ./frontend/package-lock.json ./

# Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install && mkdir /ng-app && mv ./node_modules ./ng-app

# Set workdir and copy
WORKDIR /ng-app
COPY ./frontend .

# Build the Angular app in production mode and store the artifacts in the dist folder
RUN npm run build --omit=dev

# STAGE 2: Serve
# Non-root user is not needed because we are using the "nginx-unprivileged" image
FROM nginxinc/nginx-unprivileged:alpine
USER root

RUN rm /usr/share/nginx/html/index.html && rm /etc/nginx/conf.d/default.conf

# Copy project files from ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html
# Copy license info into final artifact
COPY ./NOTICE.md /usr/share/nginx/html
COPY ./LICENSE /usr/share/nginx/html
# Give ownership to nginx user over dir with content
RUN chown -R nginx:nginx /usr/share/nginx/html/
USER nginx

# Install Node.js from builder stage
COPY --from=builder /usr/lib /usr/lib
COPY --from=builder /usr/local/include /usr/local/include
COPY --from=builder /usr/local/bin /usr/local/bin


# Copy TLS certificate
COPY ./deployment/certs/charactyr-frontend.crt /etc/nginx/ssl/charactyr-frontend.crt
# Copy NGINX server configuration
COPY ./frontend/build/nginx.conf /etc/nginx/

USER root
RUN chown nginx:nginx /etc/nginx/nginx.conf /etc/nginx/ssl/charactyr-frontend.crt

USER nginx
