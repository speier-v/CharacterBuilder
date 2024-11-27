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

<#import "field.ftl" as field>
<#import "footer.ftl" as loginFooter>
<#macro username>
<#assign label>
    <#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if>
</#assign>
<@field.group name="username" label=label>
<div class="${properties.kcInputGroup}">
    <div class="${properties.kcInputGroupItemClass} ${properties.kcFill}">
        <span class="${properties.kcInputClass} ${properties.kcFormReadOnlyClass}">
          <input id="kc-attempted-username" value="${auth.attemptedUsername}" readonly>
        </span>
    </div>
    <div class="${properties.kcInputGroupItemClass}">
        <button id="reset-login" class="${properties.kcFormPasswordVisibilityButtonClass} kc-login-tooltip"
                type="button"
                aria-label="${msg('restartLoginTooltip')}" onclick="location.href='${url.loginRestartFlowUrl}'">
            <i class="fa-sync-alt fas" aria-hidden="true"></i>
            <span class="kc-tooltip-text">${msg("restartLoginTooltip")}</span>
        </button>
    </div>
    </@field.group>
    </#macro>

    <#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false>
        <!DOCTYPE html>
        <html class="${properties.kcHtmlClass!}"<#if realm.internationalizationEnabled> lang="${locale.currentLanguageTag}" dir="${(locale.rtl)?then('rtl','ltr')}"</#if>>

        <head>
            <meta charset="utf-8">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="robots" content="noindex, nofollow">
            <meta name="color-scheme" content="light${properties.darkMode?boolean?then(' dark', '')}">

            <#if properties.meta?has_content>
                <#list properties.meta?split(' ') as meta>
                    <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}" />
                </#list>
            </#if>
            <title>Charactyr</title>
            <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
            <#if properties.stylesCommon?has_content>
                <#list properties.stylesCommon?split(' ') as style>
                    <link href="${url.resourcesCommonPath}/${style}" rel="stylesheet" />
                </#list>
            </#if>
            <#if properties.styles?has_content>
                <#list properties.styles?split(' ') as style>
                    <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
                </#list>
            </#if>
            <script type="importmap">
                {
                    "imports": {
                        "rfc4648": "${url.resourcesCommonPath}/vendor/rfc4648/rfc4648.js"
                }
            }
            </script>
            <#if properties.darkMode?boolean>
                <script type="module" async blocking="render">
                  const DARK_MODE_CLASS = "${properties.kcDarkModeClass}";
                  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  updateDarkMode(mediaQuery.matches);
                  mediaQuery.addEventListener('change', (event) => updateDarkMode(event.matches));

                  function updateDarkMode(isEnabled) {
                    const { classList } = document.documentElement;

                    if (isEnabled) {
                      classList.add(DARK_MODE_CLASS);
                    } else {
                      classList.remove(DARK_MODE_CLASS);
                    }
                  }
                </script>
            </#if>
            <#if properties.scripts?has_content>
                <#list properties.scripts?split(' ') as script>
                    <script src="${url.resourcesPath}/${script}" type="text/javascript"></script>
                </#list>
            </#if>
            <#if scripts??>
                <#list scripts as script>
                    <script src="${script}" type="text/javascript"></script>
                </#list>
            </#if>
            <script type="module" src="${url.resourcesPath}/js/passwordVisibility.js"></script>
            <script type="module">
              import { checkCookiesAndSetTimer } from "${url.resourcesPath}/js/authChecker.js";

              checkCookiesAndSetTimer(
                "${url.ssoLoginInOtherTabsUrl?no_esc}",
              );
            </script>
            <#if authenticationSession??>
                <script type="module">
                  import { checkAuthSession } from "${url.resourcesPath}/js/authChecker.js";

                  <#if authenticationSession.authSessionIdHash??>
                  checkAuthSession("${authenticationSession.authSessionIdHash}");
                  </#if>
                </script>
            </#if>
            <script>
              // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1404468
              const isFirefox;
            </script>
        </head>

        <body id="keycloak-bg" class="${properties.kcBodyClass!}">
        <div class="${properties.kcLogin!}">
            <div id="kc-login-container" class="${properties.kcLoginContainer!} corner-rounding-all">
                <main style="background-color: transparent; box-shadow: none" class="${properties.kcLoginMain!}">
                  <div id="kc-header-wrapper"
                       class="pf-v5-c-brand accent-font">Charactyr</div>
                  <h1 class="${properties.kcLoginMainTitle!}" id="kc-page-title"><#nested "header"></h1>
                    <div class="${properties.kcLoginMainBody!}">
                        <#if !(auth?has_content && auth.showUsername() && !auth.showResetCredentials())>
                            <#if displayRequiredFields>
                                <div class="${properties.kcContentWrapperClass!}">
                                    <div class="${properties.kcLabelWrapperClass!} subtitle">
                            <span class="${properties.kcInputHelperTextItemTextClass!}">
                              <span class="${properties.kcInputRequiredClass!}">*</span> ${msg("requiredFields")}
                            </span>
                                    </div>
                                </div>
                            </#if>
                        <#else>
                            <#if displayRequiredFields>
                                <div class="${properties.kcContentWrapperClass!}">
                                    <div class="${properties.kcLabelWrapperClass!} subtitle">
                            <span class="${properties.kcInputHelperTextItemTextClass!}">
                              <span class="${properties.kcInputRequiredClass!}">*</span> ${msg("requiredFields")}
                            </span>
                                    </div>
                                    <div class="${properties.kcFormClass} ${properties.kcContentWrapperClass}">
                                        <#nested "show-username">
                                        <@username />
                                    </div>
                                </div>
                            <#else>
                                <div class="${properties.kcFormClass} ${properties.kcContentWrapperClass}">
                                    <#nested "show-username">
                                    <@username />
                                </div>
                            </#if>
                        </#if>

                        <#-- App-initiated actions should not see warning messages about the need to complete the action -->
                        <#-- during login.                                                                               -->
                        <#if displayMessage && message?has_content && (message.type != 'warning' || !isAppInitiatedAction??)>
                            <div class="${properties.kcAlertClass!} pf-m-${(message.type = 'error')?then('danger', message.type)}">
                                <div class="${properties.kcAlertIconClass!}">
                                    <#if message.type = 'success'><span
                                        class="${properties.kcFeedbackSuccessIcon!}"></span></#if>
                                    <#if message.type = 'warning'><span
                                        class="${properties.kcFeedbackWarningIcon!}"></span></#if>
                                    <#if message.type = 'error'><span
                                        class="${properties.kcFeedbackErrorIcon!}"></span></#if>
                                    <#if message.type = 'info'><span
                                        class="${properties.kcFeedbackInfoIcon!}"></span></#if>
                                </div>
                                <span class="${properties.kcAlertTitleClass!} kc-feedback-text">${kcSanitize(message.summary)?no_esc}</span>
                            </div>
                        </#if>

                        <#nested "form">

                        <#if auth?has_content && auth.showTryAnotherWayLink()>
                            <form id="kc-select-try-another-way-form" action="${url.loginAction}" method="post"
                                  novalidate="novalidate">
                                <input type="hidden" name="tryAnotherWay" value="on" />
                                <a id="try-another-way"
                                   href="javascript:document.forms['kc-select-try-another-way-form'].submit()"
                                   class="${properties.kcButtonSecondaryClass} ${properties.kcButtonBlockClass} ${properties.kcMarginTopClass}">
                                    ${kcSanitize(msg("doTryAnotherWay"))?no_esc}
                                </a>
                            </form>
                        </#if>

                        <#if displayInfo>
                            <div id="kc-info" class="${properties.kcSignUpClass!}">
                                <div id="kc-info-wrapper" class="${properties.kcInfoAreaWrapperClass!}">
                                    <#nested "info">
                                </div>
                            </div>
                        </#if>
                    </div>
                    <div class="pf-v5-c-login__main-footer">
                        <#nested "socialProviders">
                    </div>
                </main>

                <@loginFooter.content/>
            </div>
        </div>
        </body>
        </html>
    </#macro>
