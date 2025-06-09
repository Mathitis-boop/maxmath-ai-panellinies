import { useState, useEffect } from "react";
import { Check, Play, Users, Award, Zap, Target, Star, ArrowRight, Brain, TrendingUp, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoScroll from "@/components/LogoScroll";
import TypingEffectTitle from '../components/TypingEffectTitle';

const formHtml = `
<script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
<form action="https://app.kit.com/forms/8163722/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="8163722" data-uid="f74823f857" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"><div data-style="clean"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;" aria-label="Email Address" placeholder="Email Address" required="" type="email"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 700;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Join Waitlist</span></button></div></div><style>.formkit-form[data-uid="f74823f857"] *{box-sizing:border-box;}.formkit-form[data-uid="f74823f857"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="f74823f857"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="f74823f857"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="f74823f857"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="f74823f857"] h1,.formkit-form[data-uid="f74823f857"] h2,.formkit-form[data-uid="f74823f857"] h3,.formkit-form[data-uid="f74823f857"] h4,.formkit-form[data-uid="f74823f857"] h5,.formkit-form[data-uid="f74823f857"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="f74823f857"] h2{font-size:1.5em;margin:1em 0;}.formkit-form[data-uid="f74823f857"] h3{font-size:1.17em;margin:1em 0;}.formkit-form[data-uid="f74823f857"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="f74823f857"] ol:not([template-default]),.formkit-form[data-uid="f74823f857"] ul:not([template-default]),.formkit-form[data-uid="f74823f857"] blockquote:not([template-default]){text-align:left;}.formkit-form[data-uid="f74823f857"] p:not([template-default]),.formkit-form[data-uid="f74823f857"] hr:not([template-default]),.formkit-form[data-uid="f74823f857"] blockquote:not([template-default]),.formkit-form[data-uid="f74823f857"] ol:not([template-default]),.formkit-form[data-uid="f74823f857"] ul:not([template-default]){color:inherit;font-style:initial;}.formkit-form[data-uid="f74823f857"] .ordered-list,.formkit-form[data-uid="f74823f857"] .unordered-list{list-style-position:outside !important;padding-left:1em;}.formkit-form[data-uid="f74823f857"] .list-item{padding-left:0;}.formkit-form[data-uid="f74823f857"][data-format="modal"]{display:none;}.formkit-form[data-uid="f74823f857"][data-format="slide in"]{display:none;}.formkit-form[data-uid="f74823f857"][data-format="sticky bar"]{display:none;}.formkit-sticky-bar .formkit-form[data-uid="f74823f857"][data-format="sticky bar"]{display:block;}.formkit-form[data-uid="f74823f857"] .formkit-input,.formkit-form[data-uid="f74823f857"] .formkit-select,.formkit-form[data-uid="f74823f857"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="f74823f857"] .formkit-button,.formkit-form[data-uid="f74823f857"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="f74823f857"] .formkit-button:hover,.formkit-form[data-uid="f74823f857"] .formkit-submit:hover,.formkit-form[data-uid="f74823f857"] .formkit-button:focus,.formkit-form[data-uid="f74823f857"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="f74823f857"] .formkit-button:hover > span,.formkit-form[data-uid="f74823f857"] .formkit-submit:hover > span,.formkit-form[data-uid="f74823f857"] .formkit-button:focus > span,.formkit-form[data-uid="f74823f857"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="f74823f857"] .formkit-button > span,.formkit-form[data-uid="f74823f857"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="f74823f857"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="f74823f857"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="f74823f857"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="f74823f857"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="f74823f857"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="f74823f857"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="f74823f857"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="f74823f857"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="f74823f857"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="f74823f857"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"]{text-align:left;margin:0;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="f74823f857"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="f74823f857"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="f74823f857"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="f74823f857"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="f74823f857"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="f74823f857"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="f74823f857"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-f74823f857- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-f74823f857- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="f74823f857"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="f74823f857"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="f74823f857"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="f74823f857"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="f74823f857"] .formkit-powered-by-convertkit-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin:10px 0;position:relative;}.formkit-form[data-uid="f74823f857"] .formkit-powered-by-convertkit-container[data-active="false"]{opacity:0.35;}.formkit-form[data-uid="f74823f857"] .formkit-powered-by-convertkit{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;border-radius:9px;color:#3d3d3d;cursor:pointer;display:block;height:36px;margin:0 auto;opacity:0.95;padding:0;-webkit-text-decoration:none;text-decoration:none;text-indent:100%;-webkit-transition:ease-in-out all 200ms;transition:ease-in-out all 200ms;white-space:nowrap;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:157px;background-repeat:no-repeat;background-position:center;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg width='133' height='36' viewBox='0 0 133 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.861 25.5C0.735 25.5 0.651 25.416 0.651 25.29V10.548C0.651 10.422 0.735 10.338 0.861 10.338H6.279C9.072 10.338 10.668 11.451 10.668 13.824C10.668 15.819 9.219 16.932 8.001 17.226C7.707 17.268 7.707 17.625 8.022 17.688C9.912 18.108 11.088 19.116 11.088 21.321C11.088 23.715 9.429 25.5 6.426 25.5H0.861ZM5.397 23.085C6.825 23.085 7.518 22.224 7.518 21.006C7.518 19.683 6.825 18.948 5.397 18.948H4.2V23.085H5.397ZM5.313 16.617C6.51 16.617 7.245 15.945 7.245 14.601C7.245 13.383 6.51 12.753 5.25 12.753H4.2V16.617H5.313ZM17.9758 23.883C17.9758 23.568 17.6608 23.505 17.5348 23.799C17.0308 24.954 16.1698 25.731 14.5528 25.731C12.8728 25.731 12.0958 24.471 12.0958 22.707V14.937C12.0958 14.811 12.1798 14.727 12.3058 14.727H15.2248C15.3508 14.727 15.4348 14.811 15.4348 14.937V21.657C15.4348 22.581 15.7708 23.022 16.4638 23.022C17.1778 23.022 17.6188 22.581 17.6188 21.657V14.937C17.6188 14.811 17.7028 14.727 17.8288 14.727H20.7478C20.8738 14.727 20.9578 14.811 20.9578 14.937V25.29C20.9578 25.416 20.8738 25.5 20.7478 25.5H18.1858C18.0598 25.5 17.9758 25.416 17.9758 25.29V23.883ZM25.6141 25.29C25.6141 25.416 25.5301 25.5 25.4041 25.5H22.4851C22.3591 25.5 22.2751 25.416 22.2751 25.29V14.937C22.2751 14.811 22.3591 14.727 22.4851 14.727H25.4041C25.5301 14.727 25.6141 14.811 25.6141 14.937V25.29ZM23.9131 13.74C22.8001 13.74 22.0441 12.942 22.0441 11.934C22.0441 10.926 22.8001 10.107 23.9131 10.107C25.0051 10.107 25.7611 10.926 25.7611 11.934C25.7611 12.942 25.0051 13.74 23.9131 13.74ZM26.7883 10.548C26.7883 10.422 26.8723 10.338 26.9983 10.338H29.9173C30.0433 10.338 30.1273 10.422 30.1273 10.548V22.056C30.1273 22.749 30.2533 23.085 30.8203 23.085C31.0093 23.085 31.1983 23.043 31.3663 23.001C31.5133 22.959 31.6183 22.959 31.6183 23.127V25.059C31.6183 25.164 31.5763 25.269 31.4923 25.311C30.9673 25.521 30.2953 25.71 29.5813 25.71C27.7123 25.71 26.7883 24.639 26.7883 22.476V10.548ZM32.4237 14.727C32.8227 14.727 32.9277 14.538 32.9697 14.055L33.1167 12.039C33.1167 11.913 33.2217 11.829 33.3477 11.829H35.8887C36.0147 11.829 36.0987 11.913 36.0987 12.039V14.517C36.0987 14.643 36.1827 14.727 36.3087 14.727H38.2827C38.4087 14.727 38.4927 14.811 38.4927 14.937V16.659C38.4927 16.785 38.4087 16.869 38.2827 16.869H36.0777V22.056C36.0777 22.875 36.5397 23.085 37.0647 23.085C37.4847 23.085 37.9467 22.938 38.3247 22.707C38.4717 22.623 38.5767 22.665 38.5767 22.833V24.828C38.5767 24.933 38.5347 25.017 38.4507 25.08C37.8417 25.458 36.9807 25.71 36.0357 25.71C34.2927 25.71 32.7387 24.912 32.7387 22.476V16.869H31.8567C31.7307 16.869 31.6467 16.785 31.6467 16.659V14.937C31.6467 14.811 31.7307 14.727 31.8567 14.727H32.4237ZM51.3808 14.727C51.5068 14.727 51.5908 14.79 51.6118 14.916L52.3888 19.851L52.5778 21.174C52.6198 21.468 52.9558 21.468 52.9768 21.174C53.0398 20.712 53.0818 20.271 53.1658 19.83L53.8798 14.916C53.9008 14.79 53.9848 14.727 54.1108 14.727H56.6728C56.8198 14.727 56.8828 14.811 56.8618 14.958L54.6778 25.311C54.6568 25.437 54.5728 25.5 54.4468 25.5H51.3178C51.1918 25.5 51.1078 25.437 51.0868 25.311L50.1208 20.082L49.8898 18.633C49.8688 18.444 49.6588 18.444 49.6378 18.633L49.4068 20.103L48.5458 25.311C48.5248 25.437 48.4408 25.5 48.3148 25.5H45.2068C45.0808 25.5 44.9968 25.437 44.9758 25.311L42.8128 14.958C42.7918 14.811 42.8548 14.727 43.0018 14.727H45.9628C46.0888 14.727 46.1728 14.79 46.1938 14.916L46.9288 19.83C47.0128 20.271 47.0758 20.754 47.1388 21.195C47.2018 21.51 47.4748 21.531 47.5378 21.195L47.7478 19.872L48.6088 14.916C48.6298 14.79 48.7138 14.727 48.8398 14.727H51.3808ZM61.1582 25.29C61.1582 25.416 61.0742 25.5 60.9482 25.5H58.0292C57.9032 25.5 57.8192 25.416 57.8192 25.29V14.937C57.8192 14.811 57.9032 14.727 58.0292 14.727H60.9482C61.0742 14.727 61.1582 14.811 61.1582 14.937V25.29ZM59.4572 13.74C58.3442 13.74 57.5882 12.942 57.5882 11.934C57.5882 10.926 58.3442 10.107 59.4572 10.107C60.5492 10.107 61.3052 10.926 61.3052 11.934C61.3052 12.942 60.5492 13.74 59.4572 13.74ZM62.8154 14.727C63.2144 14.727 63.3194 14.538 63.3614 14.055L63.5084 12.039C63.5084 11.913 63.6134 11.829 63.7394 11.829H66.2804C66.4064 11.829 66.4904 11.913 66.4904 12.039V14.517C66.4904 14.643 66.5744 14.727 66.7004 14.727H68.6744C68.8004 14.727 68.8844 14.811 68.8844 14.937V16.659C68.8844 16.785 68.8004 16.869 68.6744 16.869H66.4694V22.056C66.4694 22.875 66.9314 23.085 67.4564 23.085C67.8764 23.085 68.3384 22.938 68.7164 22.707C68.8634 22.623 68.9684 22.665 68.9684 22.833V24.828C68.9684 24.933 68.9264 25.017 68.8424 25.08C68.2334 25.458 67.3724 25.71 66.4274 25.71C64.6844 25.71 63.1304 24.912 63.1304 22.476V16.869H62.2484C62.1224 16.869 62.0384 16.785 62.0384 16.659V14.937C62.0384 14.811 62.1224 14.727 62.2484 14.727H62.8154ZM73.4298 16.323C73.4298 16.638 73.7868 16.68 73.9128 16.407C74.3748 15.315 75.1308 14.496 76.6008 14.496C78.2178 14.496 78.9528 15.609 78.9528 17.373V25.29C78.9528 25.416 78.8688 25.5 78.7428 25.5H75.8238C75.6978 25.5 75.6138 25.416 75.6138 25.29V18.633C75.6138 17.709 75.2778 17.268 74.5848 17.268C73.8708 17.268 73.4298 17.709 73.4298 18.633V25.29C73.4298 25.416 73.3458 25.5 73.2198 25.5H70.3008C70.1748 25.5 70.0908 25.416 70.0908 25.29V10.548C70.0908 10.422 70.1748 10.338 70.3008 10.338H73.2198C73.3458 10.338 73.4298 10.422 73.4298 10.548V16.323Z' fill='%231E1E1E'/%3E%3Cpath d='M100.132 16.3203C105.58 17.3761 107.272 22.4211 107.318 27.4961C107.318 27.6101 107.226 27.7041 107.112 27.7041H100.252C100.138 27.7041 100.046 27.6121 100.046 27.5001C100.026 23.5629 99.3877 20.0896 95.4865 19.9396C95.3705 19.9356 95.2725 20.0276 95.2725 20.1456V27.5001C95.2725 27.6141 95.1806 27.7061 95.0666 27.7061H88.206C88.092 27.7061 88 27.6141 88 27.5001V8.75585C88 8.64187 88.092 8.54989 88.206 8.54989H95.0686C95.1826 8.54989 95.2745 8.64187 95.2745 8.75585V15.7764C95.2745 15.8804 95.3585 15.9644 95.4625 15.9644C95.5445 15.9644 95.6185 15.9104 95.6425 15.8324C97.4081 10.0416 100.709 8.58588 106.07 8.55189C106.184 8.55189 106.276 8.64387 106.276 8.75785V15.7604C106.276 15.8744 106.184 15.9664 106.07 15.9664H100.166C100.066 15.9664 99.9856 16.0464 99.9856 16.1464C99.9856 16.2304 100.048 16.3043 100.132 16.3203ZM118.918 20.7095V16.1704C118.918 16.0564 119.01 15.9644 119.124 15.9644H124.173C124.273 15.9644 124.353 15.8844 124.353 15.7844C124.353 15.6985 124.291 15.6245 124.207 15.6085C120.256 14.8246 118.432 12.5511 118.37 8.75585C118.368 8.64387 118.458 8.54989 118.572 8.54989H125.986C126.1 8.54989 126.192 8.64187 126.192 8.75585V11.9532C126.192 12.0672 126.284 12.1592 126.398 12.1592H130.649C130.763 12.1592 130.855 12.2511 130.855 12.3651V15.7624C130.855 15.8764 130.763 15.9684 130.649 15.9684H126.398C126.284 15.9684 126.192 16.0604 126.192 16.1744V19.8356C126.192 21.1294 126.986 21.5553 128.04 21.5553C129.692 21.5553 131.323 20.8114 131.977 20.4735C132.113 20.4035 132.277 20.5015 132.277 20.6555V26.3543C132.277 26.5063 132.193 26.6463 132.059 26.7183C131.413 27.0582 129.418 28 127.136 28C122.435 27.996 118.918 26.0824 118.918 20.7095ZM109.266 27.4981V16.1704C109.266 16.0564 109.358 15.9644 109.472 15.9644H116.334C116.448 15.9644 116.54 16.0564 116.54 16.1704V27.4981C116.54 27.6121 116.448 27.7041 116.334 27.7041H109.472C109.358 27.7021 109.266 27.6101 109.266 27.4981ZM108.876 11.4913C108.876 13.4189 110.238 14.9826 112.853 14.9826C115.469 14.9826 116.83 13.4189 116.83 11.4913C116.83 9.56369 115.471 8 112.853 8C110.238 8 108.876 9.56369 108.876 11.4913Z' fill='white'/%3E%3C/svg%3E");}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-f74823f857-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-f74823f857-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.formkit-form[data-uid="f74823f857"] blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #e1e1e1;}.formkit-form[data-uid="f74823f857"] .seva-custom-content{padding:15px;font-size:16px;color:#fff;mix-blend-mode:difference;}.formkit-form[data-uid="f74823f857"] .formkit-modal.guard{max-width:420px;width:100%;} .formkit-form[data-uid="f74823f857"]{max-width:700px;}.formkit-form[data-uid="f74823f857"] [data-style="clean"]{width:100%;}.formkit-form[data-uid="f74823f857"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;}.formkit-form[data-uid="f74823f857"] .formkit-field,.formkit-form[data-uid="f74823f857"] .formkit-submit{margin:0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}.formkit-form[data-uid="f74823f857"] .formkit-powered-by-convertkit-container{margin:0;}.formkit-form[data-uid="f74823f857"] .formkit-submit{position:static;}.formkit-form[data-uid="f74823f857"][min-width~="700"] [data-style="clean"],.formkit-form[data-uid="f74823f857"][min-width~="800"] [data-style="clean"]{padding:10px;padding-top:56px;}.formkit-form[data-uid="f74823f857"][min-width~="700"] .formkit-fields[data-stacked="false"],.formkit-form[data-uid="f74823f857"][min-width~="800"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}.formkit-form[data-uid="f74823f857"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="f74823f857"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="f74823f857"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="f74823f857"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}.formkit-form[data-uid="f74823f857"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="f74823f857"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit-flex:100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}.formkit-form[data-uid="f74823f857"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="f74823f857"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;} .formkit-form[data-uid="f74823f857"] .formkit-form{background:#fff;border-radius:1rem;box-shadow:0 4px 32px 0 rgba(44,62,80,0.08);padding:2rem 1.5rem;font-family:'Inter','Segoe UI',Arial,sans-serif;border:1px solid #e5e7eb;max-width:100%;}.formkit-form[data-uid="f74823f857"] .formkit-form h2,.formkit-form[data-uid="f74823f857"] .formkit-form h3{color:#1e293b;font-weight:700;margin-bottom:1rem;}.formkit-form[data-uid="f74823f857"] .formkit-input{border-radius:0.75rem;border:1px solid #e5e7eb;padding:0.75rem 1rem;font-size:1rem;color:#0f172a;background:#f8fafc;-webkit-transition:border-color 0.2s;transition:border-color 0.2s;margin-bottom:1rem;}.formkit-form[data-uid="f74823f857"] .formkit-input:focus{border-color:#6366f1;outline:none;background:#fff;}.formkit-form[data-uid="f74823f857"] .formkit-submit{background:linear-gradient(90deg,#2563eb 0%,#7c3aed 100%);color:#fff;border-radius:0.75rem;font-weight:600;font-size:1.1rem;padding:0.75rem 2rem;border:none;box-shadow:0 2px 8px 0 rgba(44,62,80,0.08);-webkit-transition:background 0.2s,box-shadow 0.2s;transition:background 0.2s,box-shadow 0.2s;}.formkit-form[data-uid="f74823f857"] .formkit-submit:hover,.formkit-form[data-uid="f74823f857"] .formkit-submit:focus{background:linear-gradient(90deg,#7c3aed 0%,#2563eb 100%);box-shadow:0 4px 16px 0 rgba(44,62,80,0.12);}.formkit-form[data-uid="f74823f857"] .formkit-alert{border-radius:0.75rem;font-size:1rem;margin-bottom:1rem;}.formkit-form[data-uid="f74823f857"] .formkit-powered-by-convertkit-container{display:none !important;}@media (max-width:600px){.formkit-form[data-uid="f74823f857"] .formkit-form{padding:1rem 0.5rem;}}</style></form>
`;

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Add state for remaining slots
  const [remainingSlots, setRemainingSlots] = useState(100);

  // Demo: decrement by 1 on each page load (replace with real logic later)
  useEffect(() => {
    setRemainingSlots((prev) => (prev > 1 ? prev - 1 : 1));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <div 
      className={`animate-[float_6s_ease-in-out_infinite] ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-[drift_20s_ease-in-out_infinite]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-green-500/5 rounded-full blur-3xl animate-[drift_25s_ease-in-out_infinite_reverse]"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>

      {/* Header with smooth slide-in */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className={`flex items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Brain className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                MaxMath
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with enhanced animations */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Animated Trust Badge */}
            <div className="mb-8 animate-[fadeInUp_1s_ease-out_0.2s_both]">
              <Badge className="bg-gradient-to-r from-orange-50 to-yellow-50 text-orange-700 border-orange-200 px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-semibold">
                🚀 Οι πρώτοι 100 στη λίστα αναμονής παίρνουν ΔΩΡΕΑΝ συνδρομή!
              </Badge>
            </div>

            {/* Animated Headline */}
            <div className="animate-[fadeInUp_1s_ease-out_0.4s_both]">
              <TypingEffectTitle />
            </div>

            {/* Waitlist Widget Placement */}
            <div id="waitlist-widget" className="flex justify-center my-8"></div>

            {/* Animated Subtitle */}
            <div className="animate-[fadeInUp_1s_ease-out_0.6s_both]">
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Η μοναδική πλατφόρμα που σας προετοιμάζει για τις <span className="font-semibold text-gray-800 relative">
                  Πανελλήνιες
                  <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-yellow-500 animate-spin" />
                </span>
                <br />με εξατομικευμένη εκπαίδευση και στοχευμένη εξάσκηση.
              </p>
            </div>

            {/* Animated Waitlist Form */}
            <div className="animate-[fadeInUp_1s_ease-out_0.8s_both] mb-12">
              <div className="max-w-lg mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-gray-100">
                  <div dangerouslySetInnerHTML={{ __html: formHtml }} />
                </div>
              </div>
            </div>

            {/* Animated Trust Elements */}
            <div className="animate-[fadeInUp_1s_ease-out_1s_both]">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                {[
                  { icon: Check, text: "Δωρεάν Πρόσβαση", color: "text-emerald-600" },
                  { icon: Shield, text: "100% Ασφαλές", color: "text-blue-600" },
                  { icon: Star, text: "98% Επιτυχία", color: "text-yellow-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300">
                    <div className={`w-5 h-5 ${item.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                      <item.icon className={`w-3 h-3 ${item.color} group-hover:animate-pulse`} />
                    </div>
                    <span className="group-hover:text-gray-800 transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <FloatingElement delay={0} className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl">
          <div />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-xl">
          <div />
        </FloatingElement>
        <FloatingElement delay={4} className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl">
          <div />
        </FloatingElement>
      </section>

      {/* Stats Section with staggered animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2,847", label: "Μαθητές", icon: Users, color: "from-blue-500 to-blue-600", delay: 0 },
              { number: "127k", label: "Ασκήσεις", icon: Target, color: "from-emerald-500 to-emerald-600", delay: 0.1 },
              { number: "94%", label: "Βελτίωση", icon: TrendingUp, color: "from-purple-500 to-purple-600", delay: 0.2 },
              { number: "24/7", label: "Υποστήριξη", icon: Clock, color: "from-orange-500 to-orange-600", delay: 0.3 }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-[fadeInUp_1s_ease-out_both] hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:rotate-3 transition-all duration-300 relative overflow-hidden`}>
                  <stat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Scroll Section */}
      <LogoScroll />

      {/* How It Works with morphing cards */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:both]" style={{ animationDelay: '0.2s' }}>
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-6 px-4 py-2 hover:bg-blue-100 transition-colors duration-300">
              Πώς Λειτουργεί
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Τρία Βήματα στην <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Κορυφή</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Ανάλυση Επιπέδου",
                description: "Έξυπνο τεστ 5 λεπτών που εντοπίζει τα κενά σας",
                icon: Target,
                color: "from-blue-500 to-blue-600",
                delay: 0.3
              },
              {
                step: "02", 
                title: "Στοχευμένη Εξάσκηση",
                description: "AI προσαρμόζει τις ασκήσεις στις ανάγκες σας",
                icon: Zap,
                color: "from-emerald-500 to-emerald-600",
                delay: 0.5
              },
              {
                step: "03",
                title: "Εξαιρετικά Αποτελέσματα",
                description: "Παρακολουθείτε την πρόοδο και κατακτάτε το 20",
                icon: Award,
                color: "from-purple-500 to-purple-600",
                delay: 0.7
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-[fadeInUp_1s_ease-out_both] relative overflow-hidden"
                style={{ animationDelay: `${item.delay}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Animated background number */}
                  <div className="absolute top-0 right-0 text-8xl font-bold text-gray-50 opacity-50 select-none group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  
                  {/* Glowing icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                      <item.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mx-auto opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/0 to-purple-50/0 group-hover:from-blue-50/20 group-hover:via-purple-50/10 group-hover:to-transparent transition-all duration-500 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with interactive hover effects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-[fadeInLeft_1s_ease-out_0.2s_both]">
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 mb-6 px-4 py-2">
                Γιατί MaxMath
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Δημιουργήθηκε για Μαθητές.<br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Τροφοδοτείται από AI
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Χωρίς Άχρηστη Θεωρία",
                    description: "Μαθαίνετε πράττοντας, όχι απομνημονεύοντας",
                    color: "from-blue-500 to-blue-600",
                    delay: 0.3
                  },
                  {
                    title: "Προσαρμοστική AI",
                    description: "Αλγόριθμος που προσαρμόζεται στο ρυθμό σας",
                    color: "from-emerald-500 to-emerald-600",
                    delay: 0.4
                  },
                  {
                    title: "Επιστημονική Επανάληψη",
                    description: "Επαναλαμβάνετε στη σωστή στιγμή για μέγιστη απόδοση",
                    color: "from-purple-500 to-purple-600",
                    delay: 0.5
                  },
                  {
                    title: "Σχεδιασμένο για Πανελλήνιες",
                    description: "Κάθε άσκηση στοχεύει στην επιτυχία σας",
                    color: "from-orange-500 to-orange-600",
                    delay: 0.6
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 animate-[fadeInUp_1s_ease-out_both] p-4 rounded-lg hover:bg-white hover:shadow-lg"
                    style={{ animationDelay: `${benefit.delay}s` }}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative overflow-hidden`}>
                      <Check className="w-4 h-4 text-white" />
                      <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-[fadeInRight_1s_ease-out_0.4s_both]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl transform rotate-3 animate-[float_6s_ease-in-out_infinite]" />
              <div className="relative bg-white shadow-2xl border-0 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 group overflow-hidden p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Κλείστε Παρουσίαση
                </h3>
                <p className="text-gray-600 mb-6 text-lg">Κλείστε ένα ραντεβού για να δείτε πώς λειτουργεί η πλατφόρμα!</p>
                <a
                  href="#waitlist-widget"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('waitlist-widget');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg px-8 py-3 text-lg font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
                >
                  Κλείστε Ραντεβού στη Φόρμα
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with sliding animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-6 px-4 py-2">
              Μαρτυρίες Επιτυχίας
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Αποτελέσματα που <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Εντυπωσιάζουν</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Σε 2 εβδομάδες κατάλαβα περισσότερα από όλο το εξάμηνο. Το AI με οδήγησε ακριβώς εκεί που χρειαζόμουν βοήθεια.",
                name: "Μαρία Κ.",
                grade: "Γ' Λυκείου",
                avatar: "Μ",
                color: "from-blue-500 to-blue-600",
                delay: 0.3
              },
              {
                quote: "Πρώτη φορά που αισθάνομαι σίγουρη για τα Μαθηματικά. Η πλατφόρμα με έκανε να αγαπήσω το μάθημα!",
                name: "Νίκος Π.", 
                grade: "Γ' Λυκείου",
                avatar: "Ν",
                color: "from-emerald-500 to-emerald-600",
                delay: 0.5
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-[fadeInUp_1s_ease-out_both] relative overflow-hidden"
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <CardContent className="p-8 relative">
                  {/* Animated quote background */}
                  <div className="absolute top-4 left-4 text-6xl text-gray-100 font-serif opacity-50 group-hover:opacity-70 transition-opacity duration-300">&quot;</div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                        <span className="relative z-10">{testimonial.avatar}</span>
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500">{testimonial.grade}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/0 to-emerald-50/0 group-hover:from-blue-50/20 group-hover:via-emerald-50/10 group-hover:to-transparent transition-all duration-500 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing with pulsing effects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <Badge className="bg-orange-50 text-orange-700 border-orange-200 mb-6 px-4 py-2 animate-pulse">
              🚀 Προσφορά Εκκίνησης
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ξεκινήστε <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Δωρεάν</span>
            </h2>
          </div>

          <div className="max-w-lg mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl transform rotate-1 animate-[gradientShift_3s_ease-in-out_infinite]" />
              <Card className="relative border-0 shadow-2xl bg-white transform -rotate-1 group-hover:rotate-0 transition-all duration-500">
                <CardContent className="p-10 text-center relative">
                  {/* Animated success badge */}
                  <Badge className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 mb-6 px-4 py-2 font-bold hover:scale-105 transition-transform duration-300">
                    ✨ Πρώτοι 100 Μαθητές
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Πρόσβαση VIP
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2 animate-pulse">
                      Δωρεάν
                    </div>
                    <div className="text-lg text-gray-500 line-through">€39/μήνα</div>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-left">
                    {[
                      "Απεριόριστες ασκήσεις & τεστ",
                      "AI coach 24/7",
                      "Προσωποποιημένο πρόγραμμα",
                      "Αναλυτικά στατιστικά προόδου"
                    ].map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center group/item hover:scale-105 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-emerald-200 transition-colors duration-300">
                          <Check className="w-3 h-3 text-emerald-600 group-hover/item:scale-125 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl py-4 text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn"
                    onClick={() => {
                      const el = document.getElementById('waitlist-widget');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Εγγραφή στη Λίστα Αναμονής
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with epic animations */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 animate-[shimmer_4s_ease-in-out_infinite]" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Έτοιμοι για το <span className="relative">
                20
                <Sparkles className="absolute -top-2 -right-6 w-8 h-8 text-yellow-300 animate-spin" />
              </span>?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Εγγραφείτε τώρα και αποκτήστε πρώτοι πρόσβαση στην πλατφόρμα.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
              onClick={() => {
                const el = document.getElementById('waitlist-widget');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              <span className="relative z-10">Ξεκινήστε Τώρα</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/50 to-blue-50/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with subtle animations */}
      <footer className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="animate-[fadeInUp_1s_ease-out_0.2s_both]">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-white">MaxMath</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Η πρώτη AI πλατφόρμα για Μαθηματικά Πανελληνίων.
                <br />Δημιουργήθηκε στην Ελλάδα με αγάπη.
              </p>
            </div>
            {/* Removed the three navigation columns here */}
          </div>
          <div className="border-t border-gray-800 pt-8 animate-[fadeInUp_1s_ease-out_0.6s_both]">
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                🇬🇷 Φτιαγμένο στην Ελλάδα με ❤️ από εκπαιδευτικούς & AI engineers
              </p>
              <p className="text-gray-500 text-sm">
                © 2024 MaxMath. Όλα τα δικαιώματα προστατεύονται.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(100px) translateY(-50px); }
          50% { transform: translateX(200px) translateY(0px); }
          75% { transform: translateX(100px) translateY(50px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
