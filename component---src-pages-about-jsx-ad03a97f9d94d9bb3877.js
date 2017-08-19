webpackJsonp([0x83323ebd9d39f800],{"./src/components/About/About.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=o("./node_modules/react/react.js"),u=n(a),i=o("./node_modules/react-md/lib/Cards/Card.js"),c=n(i),d=o("./node_modules/react-md/lib/Cards/CardText.js"),f=n(d),p=o("./src/components/UserLinks/UserLinks.jsx"),b=n(p),m=o("./data/SiteConfig.js"),y=n(m);o("./src/components/About/About.scss");var j=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"about-container md-grid mobile-fix"},u.default.createElement(c.default,{className:"md-grid md-cell--8"},u.default.createElement("div",{className:"about-wrapper"},u.default.createElement("img",{src:y.default.userAvatar,className:"about-img",alt:y.default.userName}),u.default.createElement(f.default,null,u.default.createElement("p",{className:"about-text md-body-1"},y.default.userDescription)),u.default.createElement(b.default,{labeled:!0,config:y.default}))))},t}(a.Component);t.default=j,e.exports=t.default},"./src/components/About/About.scss":function(e,t){},"./src/components/UserLinks/UserLinks.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=o("./node_modules/react/react.js"),u=n(a),i=o("./node_modules/react-md/lib/Buttons/index.js"),c=n(i);o("./src/components/UserLinks/UserLinks.scss");var d=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return u.default.createElement(c.default,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},t.prototype.render=function(){var e=this.props.config.userLinks;return e?u.default.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(a.Component);t.default=d,e.exports=t.default},"./src/components/UserLinks/UserLinks.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/babel-plugin-lodash/lib/index.js","/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/babel-preset-stage-0/lib/index.js","/Users/admin/Desktop/projects/Cloversblog/CloversBlog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.jsx':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=o("./node_modules/react/react.js"),u=n(a),i=o("./node_modules/react-helmet/lib/Helmet.js"),c=n(i),d=o("./src/components/About/About.jsx"),f=n(d),p=o("./data/SiteConfig.js"),b=n(p),m=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"about-container"},u.default.createElement(c.default,null,u.default.createElement("title",null,"About | "+b.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:b.default.siteUrl+"/about/"})),u.default.createElement(f.default,null))},t}(a.Component);t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-jsx-ad03a97f9d94d9bb3877.js.map