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

<#macro group name label error="" required=false>

<div class="${properties.kcFormGroupClass}">
    <div class="${properties.kcFormGroupLabelClass}">
        <label for="${name}" class="${properties.kcFormGroupLabelClass}">
        <span class="form-label">
            ${label}
        </span>
            <#if required>
                <span class="${properties.kcInputRequiredClass}" aria-hidden="true">&#42;</span>
            </#if>
        </label>
    </div>

    <#nested>

    <div id="input-error-container-${name}">
        <#if error?has_content>
            <div class="${properties.kcFormHelperTextClass}" aria-live="polite">
                <div class="${properties.kcInputHelperTextClass}">
                    <div class="${properties.kcInputHelperTextItemClass} ${properties.kcError}" id="input-error-${name}">
                        <span class="${properties.kcInputErrorMessageClass}">
                            ${error}
                        </span>
                    </div>
                </div>
            </div>
        </#if>
    </div>
</div>

</#macro>

<#macro errorIcon error="">
  <#if error?has_content>
    <span class="${properties.kcFormControlUtilClass}">
        <span class="${properties.kcInputErrorIconStatusClass}">
          <i class="${properties.kcInputErrorIconClass}" aria-hidden="true"></i>
        </span>
    </span>
  </#if>
</#macro>

<#macro input name label value="" required=true autocomplete="off" fieldName=name autofocus=false>
  <#assign error=kcSanitize(messagesPerField.get(fieldName))?no_esc>
  <@group name=name label=label error=error required=required>
    <span class="corner-rounding-all ${properties.kcInputClass} <#if error?has_content>${properties.kcError}</#if>">
        <input class="kc-input-field corner-rounding-all" id="${name}" name="${name}" value="${value}" type="text" autocomplete="${autocomplete}" <#if autofocus>autofocus</#if>
                aria-invalid="<#if error?has_content>true</#if>"/>
        <@errorIcon error=error/>
    </span>
  </@group>
</#macro>

<#macro password name label value="" required=true forgotPassword=false fieldName=name autocomplete="off" autofocus=false>
  <#assign error=kcSanitize(messagesPerField.get(fieldName))?no_esc>
  <@group name=name label=label error=error required=required>
    <div class="${properties.kcInputGroup}">
      <div class="${properties.kcInputGroupItemClass} ${properties.kcFill}">
        <span class="corner-rounding-left ${properties.kcInputClass} <#if error?has_content>${properties.kcError}</#if>">
          <input class="corner-rounding-left kc-input-field" id="${name}" name="${name}" value="${value}" type="password" autocomplete="${autocomplete}" <#if autofocus>autofocus</#if>
                  aria-invalid="<#if error?has_content>true</#if>"/>
          <@errorIcon error=error/>
        </span>
      </div>
      <div class="${properties.kcInputGroupItemClass}">
        <button class="kc-input-field corner-rounding-right ${properties.kcFormPasswordVisibilityButtonClass}" type="button" aria-label="${msg('showPassword')}"
                aria-controls="${name}" data-password-toggle
                data-icon-show="fa-eye fas" data-icon-hide="fa-eye-slash fas"
                data-label-show="${msg('showPassword')}" data-label-hide="${msg('hidePassword')}">
            <i class="fa-eye fas" aria-hidden="true"></i>
        </button>
      </div>
    </div>
      <#if forgotPassword>
        <div class="${properties.kcFormHelperTextClass}" aria-live="polite">
            <div class="${properties.kcInputHelperTextClass}">
                <div class="${properties.kcInputHelperTextItemClass}">
                    <span class="${properties.kcInputHelperTextItemTextClass}">
                        <a class="link" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
                    </span>
                </div>
            </div>
        </div>
      </#if>
  </@group>
</#macro>

<#macro checkbox name label value=false required=false>
  <div class="${properties.kcCheckboxClass}">
    <label for="${name}" class="${properties.kcCheckboxClass}">
      <input
        class="${properties.kcCheckboxInputClass}"
        type="checkbox"
        id="${name}"
        name="${name}"
        <#if value>checked</#if>
      />
      <span style="color: black" class="${properties.kcCheckboxLabelClass}">${label}</span>
      <#if required>
        <span class="${properties.kcCheckboxLabelRequiredClass}" aria-hidden="true">&#42;</span>
      </#if>
    </label>
  </div>
</#macro>