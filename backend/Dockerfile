# Copyright (c) 2022,2024
#       2022: ZF Friedrichshafen AG
#       2022: ISTOS GmbH
#       2022,2024: Bayerische Motoren Werke Aktiengesellschaft (BMW AG)
#       2022,2023: BOSCH AG
# Copyright (c) 2021,2024 Contributors to the Eclipse Foundation
#
# See the NOTICE file(s) distributed with this work for additional
# information regarding copyright ownership.
#
# This program and the accompanying materials are made available under the
# terms of the Apache License, Version 2.0 which is available at
# https://www.apache.org/licenses/LICENSE-2.0. *
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
#
# * SPDX-License-Identifier: Apache-2.0
# Modifications made by the developers of Charactyr, 2024

# Dependencies
FROM maven:3-eclipse-temurin-21-alpine AS maven

WORKDIR /build

COPY src src
COPY config config
COPY pom.xml .

# the --mount option requires BuildKit.
RUN --mount=type=cache,target=/root/.m2 mvn -B clean package -DskipTests


# Copy the jar and build image
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

COPY --chmod=755 --from=maven /build/target/backend-*-SNAPSHOT.jar app.jar

USER 10000:3000

ENTRYPOINT ["java", "-jar", "app.jar"]
