(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{247:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(21),o=a.n(i);a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(29),c=a(17),s=a(24),m=a(16),u=a(13),p={player1:"",player2:""},d={gameStatus:"Waiting"},g={error:!1},b={values:["","","","","","","","",""],playerSymbol:"X"},h=Object(m.b)({inputvalue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_UPDATE_VALUE":return Object(u.a)({},e,{player1:t.player1,player2:t.player2});case"RESET":return Object(u.a)({},e,{player1:p.player1,player2:p.player2});default:return e}},gameValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAME_STATUS":return Object(u.a)({},e,{gameStatus:t.gameStatus});case"RESET":return Object(u.a)({},e,{gameStatus:d.gameStatus});default:return e}},errorValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR_STATUS":return Object(u.a)({},e,{error:t.error});case"RESET":return Object(u.a)({},e,{error:g.error});default:return e}},playerValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYER_UPDATE_VALUE":return Object(u.a)({},e,{values:t.values,playerSymbol:t.playerSymbol});case"RESET":return Object(u.a)({},e,{values:b.values,playerSymbol:b.playerSymbol});default:return e}}}),k=Object(m.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=a(5),y=a(6),E=a(9),w=a(7),S=a(10),v=function(e,t){return{type:"INPUT_UPDATE_VALUE",player1:e,player2:t}},C=function(e){return{type:"GAME_STATUS",gameStatus:e}},x=function(e){return{type:"ERROR_STATUS",error:e}},R=function(e,t){return{type:"PLAYER_UPDATE_VALUE",values:e,playerSymbol:t}},O=function(){return{type:"RESET"}},T=a(41),B=(a(52),function(e){function t(){var e,a;Object(f.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){a.props.onClick(a.props.keys)},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.value;return"X"===e?n.a.createElement("div",{className:"cell",style:{width:"33%",height:"100%",backgroundColor:"red",display:"inline-block"},onClick:this.handleClick},this.props.value):"O"===e?n.a.createElement("div",{className:"cell",style:{width:"33%",height:"100%",backgroundColor:"blue",display:"inline-block"},onClick:this.handleClick},this.props.value):n.a.createElement("div",{className:"cell",style:{width:"33%",height:"100%",backgroundColor:"white",display:"inline-block"},onClick:this.handleClick},"-")}}]),t}(r.Component)),j=a(250),A=a(251),M=a(256),P=function(e){var t=e.players,a=e.playerSymbol,r=e.gameStatus,i=e.reset;return"Win"===r?n.a.createElement("div",{className:"board title",style:{backgroundColor:"limegreen"}},n.a.createElement(j.a,null,n.a.createElement(A.a,null),n.a.createElement(A.a,{sm:!0},t["X"===a?0:1]," venceu!"),n.a.createElement(A.a,{sm:!0},n.a.createElement(M.a,{onClick:i,className:"resetButton"},"Jogar novamente")))):"Tie"===r?n.a.createElement("div",{className:"board title",style:{backgroundColor:"grey"}},"Empate!",n.a.createElement("br",null),n.a.createElement(M.a,{onClick:i,className:"resetButton"},"Jogar novamente")):n.a.createElement("div",{className:"board title"},"Vez do(a) ",t["X"===a?0:1])},I=function(e){function t(){var e,a;Object(f.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){var t=a.props,r=t.playerSymbol,n=t.playerChange,i=t.values,o=t.gameChange,l=t.gameStatus;if("Win"!==l&&"Tie"!==l){var c=Object(T.a)(i);""===c[e]&&(c[e]=r,a.verifyWin(c)?(o("Win"),n(c,r)):a.verifyTie(c)?(o("Tie"),n(c,r)):n(c,"X"===r?"O":"X"))}},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"verifyWin",value:function(e){return!!this.compare(e.slice(0,3))||(!!this.compare(e.slice(3,6))||(!!this.compare(e.slice(6,9))||(!!this.compare([e[0],e[3],e[6]])||(!!this.compare([e[1],e[4],e[7]])||(!!this.compare([e[2],e[5],e[8]])||(!!this.compare([e[0],e[4],e[8]])||!!this.compare([e[2],e[4],e[6]])))))))}},{key:"verifyTie",value:function(e){for(var t=0;t<9;t++)if(""===e[t])return!1;return!0}},{key:"compare",value:function(e){return e[0]===e[1]&&e[1]===e[2]&&""!==e[0]}},{key:"render",value:function(){var e=this.props,t=e.players,a=e.playerSymbol,r=e.values,i=e.reset,o=e.gameStatus;return n.a.createElement("div",{className:"tictactoe"},n.a.createElement(P,{players:t,playerSymbol:a,gameStatus:o,reset:i}),n.a.createElement("div",{className:"line",style:{width:"100%",height:"25%"}},n.a.createElement(B,{keys:"0",value:r[0],onClick:this.handleClick}),n.a.createElement(B,{keys:"1",value:r[1],onClick:this.handleClick}),n.a.createElement(B,{keys:"2",value:r[2],onClick:this.handleClick})),n.a.createElement("div",{className:"line",style:{width:"100%",height:"25%"}},n.a.createElement(B,{keys:"3",value:r[3],onClick:this.handleClick}),n.a.createElement(B,{keys:"4",value:r[4],onClick:this.handleClick}),n.a.createElement(B,{keys:"5",value:r[5],onClick:this.handleClick})),n.a.createElement("div",{className:"line",style:{width:"100%",height:"25%"}},n.a.createElement(B,{keys:"6",value:r[6],onClick:this.handleClick}),n.a.createElement(B,{keys:"7",value:r[7],onClick:this.handleClick}),n.a.createElement(B,{keys:"8",value:r[8],onClick:this.handleClick})))}}]),t}(r.Component),N=a(23),W=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(E.a)(this,Object(w.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.state={player1:"",player2:""},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.handleClick,r=this.state,i=r.player1,o=r.player2;return n.a.createElement("div",{className:"tictactoe form container"},n.a.createElement(j.a,{className:"form title"},"Digite o nome dos jogadores"),n.a.createElement(j.a,null,t&&n.a.createElement("div",{className:"errormessage"},"Voc\xea precisa escrever o nome dos jogadores antes de come\xe7ar o jogo!")),n.a.createElement(j.a,{className:"players"},n.a.createElement(A.a,null,"Player 1",n.a.createElement("br",null),n.a.createElement("input",{id:"player1",type:"text",value:i,onChange:this.handleChange})),n.a.createElement(A.a,null,"Player 2",n.a.createElement("br",null),n.a.createElement("input",{id:"player2",type:"text",value:o,onChange:this.handleChange}))),n.a.createElement(j.a,null,n.a.createElement(M.a,{onClick:function(){return a(i,o)},style:{marginTop:"20px"}},"Jogar TicTacToe!")))}}]),t}(r.Component),D=(a(53),function(e){function t(){var e,a;Object(f.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(E.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e,t){var r=[1,2,3,4,5],n=r[0],i=r[1],o=r[2];console.log(n,i,o,"a");var l=a.props,c=l.gameChange,s=l.inputChange,m=l.errorChange;""!==e&&""!==t?(c("Started"),s(e,t)):m(!0)},a.reset=function(){(0,a.props.reset)()},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player1,a=e.player2,r=e.gameStatus,i=e.error,o=e.playerChange,l=e.playerSymbol,c=e.values,s=e.gameChange,m=e.reset;return n.a.createElement("div",null,"Waiting"===r?n.a.createElement(W,{handleClick:this.handleClick,handleKeyUp:this.handleKeyUp,player1:t,player2:a,gameStatus:r,error:i}):n.a.createElement(I,{players:[t,a],reset:m,playerChange:o,playerSymbol:l,values:c,gameChange:s,gameStatus:r}))}}]),t}(r.Component)),L=Object(s.b)(function(e){return{player1:e.inputvalue.player1,player2:e.inputvalue.player2,gameStatus:e.gameValue.gameStatus,error:e.errorValue.error,playerSymbol:e.playerValue.playerSymbol,values:e.playerValue.values}},function(e){return Object(m.a)({inputChange:v,gameChange:C,errorChange:x,playerChange:R,reset:O},e)})(D),_=function(e){function t(){return Object(f.a)(this,t),Object(E.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,"P\xe1gina n\xe3o encontrada")}}]),t}(r.Component),z=function(e){function t(){return Object(f.a)(this,t),Object(E.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",null,this.props.items.map(function(e){return n.a.createElement("li",{key:e},e)}))}}]),t}(r.Component),U=a(258),V=a(257),F=(a(54),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(E.a)(this,Object(w.a)(t).call(this,e))).filterList=function(e){var t=a.state.initialItems;t=t.filter(function(t){return-1!==t.toLowerCase().search(e.target.value.toLowerCase())}),a.setState({items:t})},a.state={initialItems:["alignContent","alignItems","alignSelf","alignmentBaseline","all","animation","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction","backfaceVisibility","background","backgroundAttachment","backgroundBlendMode","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundRepeatX","backgroundRepeatY","backgroundSize","baselineShift","blockSize","border","borderBottom","borderBottomColor","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStyle","borderBottomWidth","borderCollapse","borderColor","borderImage","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeft","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRadius","borderRight","borderRightColor","borderRightStyle","borderRightWidth","borderSpacing","borderStyle","borderTop","borderTopColor","borderTopLeftRadius","borderTopRightRadius","borderTopStyle","borderTopWidth","borderWidth","bottom","boxShadow","boxSizing","breakAfter","breakBefore","breakInside","bufferedRendering","captionSide","caretColor","clear","clip","clipPath","clipRule","color","colorInterpolation","colorInterpolationFilters","colorRendering","columnCount","columnFill","columnGap","columnRule","columnRuleColor","columnRuleStyle","columnRuleWidth","columnSpan","columnWidth","columns","contain","content","counterIncrement","counterReset","cssFloat","cssText","cursor","cx","cy","d","direction","display","dominantBaseline","emptyCells","fill","fillOpacity","fillRule","filter","flex","flexBasis","flexDirection","flexFlow","flexGrow","flexShrink","flexWrap","float","floodColor","floodOpacity","font","fontDisplay","fontFamily","fontFeatureSettings","fontKerning","fontSize","fontStretch","fontStyle","fontVariant","fontVariantCaps","fontVariantLigatures","fontVariantNumeric","fontWeight","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnGap","gridColumnStart","gridGap","gridRow","gridRowEnd","gridRowGap","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","height","hyphens","imageRendering","inlineSize","isolation","justifyContent","justifyItems","justifySelf","left","length0","letterSpacing","lightingColor","lineHeight","listStyle","listStyleImage","listStylePosition","listStyleType","margin","marginBottom","marginLeft","marginRight","marginTop","marker","markerEnd","markerMid","markerStart","mask","maskType","maxBlockSize","maxHeight","maxInlineSize","maxWidth","maxZoom","minBlockSize","minHeight","minInlineSize","minWidth","minZoom","mixBlendMode","objectFit","objectPosition","offset","offsetDistance","offsetPath","offsetRotate","opacity","order","orientation","orphans","outline","outlineColor","outlineOffset","outlineStyle","outlineWidth","overflow","overflowAnchor","overflowWrap","overflowX","overflowY","padding","paddingBottom","paddingLeft","paddingRight","paddingTop","page","pageBreakAfter","pageBreakBefore","pageBreakInside","paintOrder","parentRulenull","perspective","perspectiveOrigin","placeContent","placeItems","placeSelf","pointerEvents","position","quotes","r","resize","right","rx","ry","shapeImageThreshold","shapeMargin","shapeOutside","shapeRendering","size","speak","src","stopColor","stopOpacity","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","tableLayout","textAlign","textAlignLast","textAnchor","textCombineUpright","textDecoration","textDecorationColor","textDecorationLine","textDecorationSkip","textDecorationStyle","textIndent","textOrientation","textOverflow","textRendering","textShadow","textSizeAdjust","textTransform","textUnderlinePosition","top","touchAction","transform","transformOrigin","transformStyle","transition","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction","unicodeBidi","unicodeRange","userSelect","userZoom","vectorEffect","verticalAlign","visibility","webkitAppRegion","webkitAppearance","webkitBackgroundClip","webkitBackgroundOrigin","webkitBorderAfter","webkitBorderAfterColor","webkitBorderAfterStyle","webkitBorderAfterWidth","webkitBorderBefore","webkitBorderBeforeColor","webkitBorderBeforeStyle","webkitBorderBeforeWidth","webkitBorderEnd","webkitBorderEndColor","webkitBorderEndStyle","webkitBorderEndWidth","webkitBorderHorizontalSpacing","webkitBorderImage","webkitBorderStart","webkitBorderStartColor","webkitBorderStartStyle","webkitBorderStartWidth","webkitBorderVerticalSpacing","webkitBoxAlign","webkitBoxDecorationBreak","webkitBoxDirection","webkitBoxFlex","webkitBoxFlexGroup","webkitBoxLines","webkitBoxOrdinalGroup","webkitBoxOrient","webkitBoxPack","webkitBoxReflect","webkitColumnBreakAfter","webkitColumnBreakBefore","webkitColumnBreakInside","webkitFontSizeDelta","webkitFontSmoothing","webkitHighlight","webkitHyphenateCharacter","webkitLineBreak","webkitLineClamp","webkitLocale","webkitLogicalHeight","webkitLogicalWidth","webkitMarginAfter","webkitMarginAfterCollapse","webkitMarginBefore","webkitMarginBeforeCollapse","webkitMarginBottomCollapse","webkitMarginCollapse","webkitMarginEnd","webkitMarginStart","webkitMarginTopCollapse","webkitMask","webkitMaskBoxImage","webkitMaskBoxImageOutset","webkitMaskBoxImageRepeat","webkitMaskBoxImageSlice","webkitMaskBoxImageSource","webkitMaskBoxImageWidth","webkitMaskClip","webkitMaskComposite","webkitMaskImage","webkitMaskOrigin","webkitMaskPosition","webkitMaskPositionX","webkitMaskPositionY","webkitMaskRepeat","webkitMaskRepeatX","webkitMaskRepeatY","webkitMaskSize","webkitMaxLogicalHeight","webkitMaxLogicalWidth","webkitMinLogicalHeight","webkitMinLogicalWidth","webkitPaddingAfter","webkitPaddingBefore","webkitPaddingEnd","webkitPaddingStart","webkitPerspectiveOriginX","webkitPerspectiveOriginY","webkitPrintColorAdjust","webkitRtlOrdering","webkitRubyPosition","webkitTapHighlightColor","webkitTextCombine","webkitTextDecorationsInEffect","webkitTextEmphasis","webkitTextEmphasisColor","webkitTextEmphasisPosition","webkitTextEmphasisStyle","webkitTextFillColor","webkitTextOrientation","webkitTextSecurity","webkitTextStroke","webkitTextStrokeColor","webkitTextStrokeWidth","webkitTransformOriginX","webkitTransformOriginY","webkitTransformOriginZ","webkitUserDrag","webkitUserModify","webkitWritingMode","whiteSpace","widows","width","willChange","wordBreak","wordSpacing","wordWrap","writingMode","x","y","zIndex","zoom"],items:[]},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentWillMount",value:function(){this.setState({items:this.state.initialItems})}},{key:"render",value:function(){return n.a.createElement("div",{id:"mount-point"},n.a.createElement("div",{className:"filter-list"},n.a.createElement(U.a,{className:"mb-3"},n.a.createElement(V.a,{placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon1",onChange:this.filterList})),n.a.createElement(z,{items:this.state.items})))}}]),t}(r.Component)),X=a(253),Y=a(254),H=a(255),G=a(252);var J=function(){return n.a.createElement("pre",{style:{borderRadius:"10px",fontSize:"120%"}},n.a.createElement(H.a,{language:"javascript",style:G.a},"import React,{Component} from 'react'\nimport ReactDOM from 'react-dom'\nclass StandardClass extends Component {\n    constructor(props) {\n      super(props)\n      this.state = { username: 'Jo\xe3o' }\n    }\n    render () {\n        return( \n            <div>\n                {this.state.username}\n            </div>\n        );\n    }\n}\nexport default StandardClass;"))};var Z=function(){return n.a.createElement("pre",{style:{borderRadius:"10px",fontSize:"90%"}},n.a.createElement(H.a,{language:"javascript",style:G.a},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport * as serviceWorker from './serviceWorker';\nimport { BrowserRouter, Switch, Route } from 'react-router-dom'\nimport Page from './components/page/Page' //Your page\nimport PageNotFound from './components/pagenotfound/Pagenotfound'\nimport App from './App';\n\nReactDOM.render(\n    <BrowserRouter>\n        <Switch>\n            <Route path=\"/\" exact={true} component={App}/>\n            <Route path=\"/page\" exact={true} component={Page}/>\n            <Route path=\"*\" component={PageNotFound}/>\n        </Switch>\n    </BrowserRouter>\n    , document.getElementById('root'));\nserviceWorker.unregister();\n"))};var K=function(){return n.a.createElement("pre",{style:{borderRadius:"10px",fontSize:"100%"}},n.a.createElement(H.a,{language:"javascript",style:G.a},"import { createStore } from 'redux';\nimport { Reducers } from '../reducers';\nexport const Store = createStore(Reducers);\n"))};var q=function(){return n.a.createElement("pre",{style:{borderRadius:"10px",fontSize:"90%"}},n.a.createElement(H.a,{language:"javascript",style:G.a},"import { ACTION_STATUS } from '../actions/actionTypes';\nconst initialState = {\n    reducerState:true\n};\nexport const Reducer = (state = initialState, action) => {\n  switch (action.type) {\n      case ACTION_STATUS:\n          return {\n            ...state,\n            reducerState: action.reducerState,        \n          };\n    default:\n      return state;\n  }\n};\n"))};var $=function(){return n.a.createElement("pre",{style:{borderRadius:"10px",fontSize:"90%"}},n.a.createElement(H.a,{language:"javascript",style:G.a},"import { connect } from 'react-redux'\n// A functional React component\nfunction App ({ message, onMessageClick }) {\n  return (\n    <div onClick={() => onMessageClick('hello')}>\n      {message}\n    </div>\n  )\n}\n// Maps 'state' to 'props':\n// These will be added as props to the component.\nfunction mapState (state) {\n  return { message: state.message }\n}\n\n// Maps 'dispatch' to 'props':\nfunction mapDispatch (dispatch) {\n  return {\n    onMessageClick (message) {\n      dispatch({ type: 'click', message })\n    }\n  }\n}\n\n// Connect them:\nexport default connect(mapState, mapDispatch)(App)\n"))};var Q=function(){return n.a.createElement("pre",{style:{borderRadius:"10px",fontSize:"90%"}},n.a.createElement(H.a,{language:"javascript",style:G.a},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport * as serviceWorker from './serviceWorker';\nimport { BrowserRouter, Switch, Route } from 'react-router-dom'\nimport { Provider } from 'react-redux';\nimport { Store } from './store';\nimport Page from './components/page/Page' //Your page\nimport PageNotFound from './components/pagenotfound/Pagenotfound'\nimport App from './App';\n\nReactDOM.render(\n    <Provider store={Store}>\n        <BrowserRouter>\n            <Switch>\n                <Route path=\"/\" exact={true} component={App} />                \n                <Route path=\"/page\" exact={true} component={Page} />  \n                <Route path=\"*\" component={PageNotFound} />\n            </Switch>\n        </BrowserRouter>\n    </Provider>\n    , document.getElementById('root'));\nserviceWorker.unregister();\n"))},ee=(a(247),function(e){function t(e){return Object(f.a)(this,t),Object(E.a)(this,Object(w.a)(t).call(this,e))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"React Cheat Sheet"),n.a.createElement(X.a,null,n.a.createElement("div",{className:"col small left"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"CSS Cheat Sheet"),n.a.createElement(Y.a,{style:{height:"400px"}},n.a.createElement(X.a,null,n.a.createElement(F,null))))),n.a.createElement("div",{className:"col large right"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"TicTacToe"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(L,null))))),n.a.createElement("div",{className:"col small text left"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Component Template"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(J,null))))),n.a.createElement("div",{className:"col large text right"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Browser Router Template"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(Z,null))))),n.a.createElement("div",{className:"col small text left"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Store Template"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(K,null))))),n.a.createElement("div",{className:"col large text right"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Provider Browser Router Template"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(Q,null))))),n.a.createElement("div",{className:"col small text left"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Action Template"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(q,null))))),n.a.createElement("div",{className:"col small text left"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Reducer Template"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement(q,null))))),n.a.createElement("div",{className:"col large text right"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Mapping State"),n.a.createElement(Y.a,null,n.a.createElement(X.a,null,n.a.createElement($,null)))))))}}]),t}(r.Component));o.a.render(n.a.createElement(s.a,{store:k},n.a.createElement(l.a,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/",exact:!0,component:ee}),n.a.createElement(c.a,{path:"/TicTacToe",component:L}),n.a.createElement(c.a,{path:"/css",exact:!0,component:F}),n.a.createElement(c.a,{path:"*",component:_})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a(249)},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.35b52c8d.chunk.js.map