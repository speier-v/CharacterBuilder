<#-- Copyright (c) 2024 Keycloak Authors
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
#    Modifications made by developers of Charactyr, 2024.-->

<#macro actionGroup>
  <div class="${properties.kcFormGroupClass}">
    <div class="${properties.kcFormActionGroupClass}">
      <#nested>
    </div>
  </div>
</#macro>

<#macro button label id="" name="" class=["kcButtonPrimaryClass"]>
  <button class="accent-font kc-submit-button corner-rounding-all <#list class as c>${properties[c]} </#list>" name="${name}" id="${id}" type="submit">${msg(label)}</button>
</#macro>

<#macro buttonLink href label id="" class=["kcButtonSecondaryClass"]>
  <a id="${id}" href="${href}" class="link">${kcSanitize(msg(label))?no_esc}</a>
</#macro>

<#macro loginButton>
  <@buttons.actionGroup>
    <@buttons.button id="kc-login" name="login" label="doLogIn" class=["kcButtonPrimaryClass", "kcButtonBlockClass"] />
  </@buttons.actionGroup>
</#macro>