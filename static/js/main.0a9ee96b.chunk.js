(this["webpackJsonpproj2-trivia"]=this["webpackJsonpproj2-trivia"]||[]).push([[0],{14:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){e.exports=n(59)},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),s=(n(37),n(15)),i=n(28),l=n(5),u=n(6),m=n(8),d=n(7),f=n(9),p=n(10),h=n(4),b=(n(38),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top nav-adjust"},r.a.createElement("a",{href:"./",className:"navbar-text"},r.a.createElement("span",{className:"small-logo"},"(not)"),"TrivialQuest"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(h.c,{exact:!0,to:"/",className:"navbar-links nav-item",activeClassName:"active"},"Homepage"),r.a.createElement(h.c,{to:"/about",className:"navbar-links nav-item",activeClassName:"active"},"About us"))))}),E=(n(44),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"home-title"},"Welcome to our Trivia Quiz!"),r.a.createElement("h2",{className:"home-subtitle"}," Press start to begin"))}),v=n(31),g=n.n(v),y=(n(53),function(e){return r.a.createElement("div",{className:"chooseSettingsWrap"},r.a.createElement("select",{className:"settingsOptionsDrop",value:e.chosenDif.difficulty,onChange:function(t){return e.selectDif(e.difficulties.find((function(e){return e.difficulty===t.target.value})))}},e.difficulties.map((function(e){return r.a.createElement("option",{key:e.id},e.difficulty)}))),r.a.createElement("select",{className:"settingsOptionsDrop",value:e.chosenCat.name,onChange:function(t){return e.selectCat(e.categories.find((function(e){return e.name===t.target.value})))}},e.categories.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))))}),w=(n(54),n(14),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).openModal=function(){n.setState({modalIsOpen:!0})},n.afterOpenModal=function(){n.subtitle.style.color="#f00"},n.closeModal=function(){!0===n.state.modalIsOpen&&n.setState({modalIsOpen:!1})},n.state={modalIsOpen:!1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChoices",value:function(){this.props.getQuiz(),this.props.updatedTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.chosenCat,a=t.chosenDif,c=t.categories,o=t.difficulties,s=t.selectCat,i=t.selectDif;return r.a.createElement("main",{className:"homepage-main"},r.a.createElement(y,{selectDif:i,chosenDif:a,difficulties:o,chosenCat:n,selectCat:s,categories:c}),r.a.createElement(E,null),r.a.createElement("div",{className:"btns_container",onClick:this.closeModal},r.a.createElement("div",{className:"help-btn-div"},r.a.createElement("button",{onClick:this.openModal,className:"HelpBtn"},"?")),r.a.createElement("div",{className:"start-btn-div"},r.a.createElement("button",{onClick:function(){return e.handleChoices()},className:"start-btn"},"Start")),r.a.createElement(g.a,{className:"ModalStyle",isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal},r.a.createElement("div",{className:"Modal_Container"},r.a.createElement("h2",{ref:function(t){return e.subtitle=t}},"Questions"),r.a.createElement("p",{className:"modal-text"},"Choose the Category and leve of dificulty. By default it shows a random mix of questions. There are 10 of them... are you ready?"),r.a.createElement("button",{onClick:this.closeModal,className:"Close"},"Close")))))}}]),t}(a.Component)),C=n(16),O=(n(26),n(55),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).shuffleAnswers=function(e){for(var t=e.length-1;t>0;t--){decodeURIComponent(e[t]);var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return n.setState({answers:e})},n.state={answers:[]},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.shuffleAnswers([].concat(Object(s.a)(this.props.incorrect),[this.props.correct]))}},{key:"render",value:function(){var e=this.props,t=e.updateUserAnswer,n=e.numQ,a=e.question,c=e.btnColor,o=e.userAnswer,s=e.clickedNext,i=this.state.answers;return r.a.createElement("div",{className:"question-div"},r.a.createElement("legend",{className:"question"},n," - ",decodeURIComponent(a)),r.a.createElement("div",{className:"answers-div"},i.map((function(e,a){var i=decodeURIComponent(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"radio",name:n,value:i,id:10*n+a,onChange:function(){return t(n,i)},className:"radio"}),r.a.createElement("label",{htmlFor:10*n+a,key:i,className:i===o&&s?"answer-div ".concat(c," col-sm-5 col-md-4"):"answer-div answer-div-nonClickedNext col-sm-5 col-md-4 label-before-submit"},i))}))))}}]),t}(a.Component)),N=(n(56),function(e){var t=e.chosenCat,n=e.chosenDif;return r.a.createElement("div",{className:"show-settings"},r.a.createElement("p",null,"Category: ","Any Category"===t.name?"Any":t.name),r.a.createElement("p",null,"Difficulty: ","Any Difficulty"===n.difficulty?"Any":n.difficulty))}),j=function(e){var t=e.seconds;return r.a.createElement("div",null,r.a.createElement("p",null," Time: ",t," "))},k=function(e){var t=e.quizInfo,n=e.chosenCat,c=e.chosenDif,o=e.updateUserAnswer,s=e.seconds,i=e.pausedTimer,l=Object(p.f)(),u=Object(a.useState)(0),m=Object(C.a)(u,2),d=m[0],f=m[1],h=Object(a.useState)(""),b=Object(C.a)(h,2),E=b[0],v=b[1],g=Object(a.useState)(!1),y=Object(C.a)(g,2),w=y[0],k=y[1],D=[];Object.keys(t).forEach((function(e){D.push(t[e])}));var I=function(e){e.preventDefault();var n=decodeURIComponent(t[d].correct_answer),a=t[d].user_answer;v(n===a?"correct":"incorrect"),k(!0),d<9?setTimeout((function(){f(d+1),k(!1),v("")}),700):(setTimeout((function(){l.push("/result")}),700),i())};return r.a.createElement("main",{className:"quiz-main"},r.a.createElement("section",{className:"show-settings-timer"},r.a.createElement(N,{chosenCat:n,chosenDif:c}),r.a.createElement(j,{seconds:s})),r.a.createElement("section",{className:"container section-question"},r.a.createElement("div",null,D.map((function(e,n){return d!==n?null:r.a.createElement("form",{className:"question-form text-center",onSubmit:I,key:decodeURIComponent(e.question)},r.a.createElement(O,{userAnswer:t[n].user_answer,updateUserAnswer:o,numQ:n+1,question:e.question,correct:e.correct_answer,incorrect:e.incorrect_answers,btnColor:E,clickedNext:w}),d<9&&r.a.createElement("input",{className:"submit-btn",type:"submit",value:"Submit"}),9===d&&r.a.createElement("input",{className:"submit-btn",type:"submit",value:"Submit"}))})))))},D=(n(57),function(e){var t=e.quizInfo;return r.a.createElement("section",{className:"answers-table"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger see-answers-btn","data-toggle":"collapse","data-target":"#answer-table"},"See answers!"),r.a.createElement("div",{id:"answer-table",className:"collapse"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",{className:"answers-tablehead thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Question"),r.a.createElement("th",{scope:"col"},"Correct answer"),r.a.createElement("th",{scope:"col"},"Your answer"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t+1},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,decodeURIComponent(e.question)),r.a.createElement("td",null,decodeURIComponent(e.correct_answer)),r.a.createElement("td",null,e.user_answer))}))))))}),I=function(e){var t=e.seconds;return r.a.createElement("p",{className:"show-Timer"},"Total time: ",t," seconds")},S=(n(58),function(e){var t=e.quizInfo,n=e.chosenCat,a=e.chosenDif,c=e.seconds,o=(e.resetTimer,function(){var e=0;return t.forEach((function(t){decodeURIComponent(t.correct_answer)===t.user_answer&&(e+=10)})),e});return r.a.createElement("main",{className:"result-main"},r.a.createElement("section",{className:"result-showsettings"},r.a.createElement(N,{chosenDif:a,chosenCat:n})),r.a.createElement("p",null,function(){var e=o();return 100===e?"LEGEN (wait for it) DARY!!!":e>=80?"WOW... you are a genius!":e>=60?"You are amazing!":e>=40?"Good job!":e>=20?"Well, it wasn't thaaat bad...":"Oh dear! You might want to pick up a book or two."}()),r.a.createElement("div",{className:"result-info"},r.a.createElement("p",null,"Your score: ",o()," / 100 "),r.a.createElement(I,{seconds:c})),r.a.createElement(D,{quizInfo:t}),r.a.createElement(h.b,{to:"/"},r.a.createElement("button",{className:"playAgain-btn"},"Play again!")))}),z=(n(27),function(e){var t=e.name,n=e.photo,a=e.linkedin,c=e.github;return r.a.createElement("article",{className:"person"},r.a.createElement("figure",null,r.a.createElement("img",{src:n,alt:t,className:"photos-us"}),r.a.createElement("figcaption",null,t,r.a.createElement("p",{className:"job-student"},"Web-Development Student"))),r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{href:a}," ",r.a.createElement("img",{src:"https://i.imgur.com/hzkKCzQ.png?1",alt:t})," "),r.a.createElement("a",{href:c}," ",r.a.createElement("img",{src:"https://i.imgur.com/PYGpHt0.png?1",alt:t})," ")))}),A=[{name:"Manuela Cardoso",photo:"https://i.imgur.com/sCzb5UP.png?1",linkedin:"https://www.linkedin.com/in/manuela-cardoso-94b6b829/",github:"https://github.com/Zzphyr"},{name:"Victoria Zimmermann",photo:"https://i.imgur.com/pm9oA7Z.png?1",linkedin:"https://www.linkedin.com/in/victoria-z-b6b57295/",github:"https://github.com/tzimms"}],q=function(){return r.a.createElement("section",{className:"people"},A.map((function(e){return r.a.createElement(z,{key:e.name,name:e.name,photo:e.photo,linkedin:e.linkedin,github:e.github})})))},T=function(){return r.a.createElement("main",{className:"about-main"},r.a.createElement("h1",{className:"about-title"},"About us"),r.a.createElement(q,null),r.a.createElement("article",{className:"project-description"},r.a.createElement("p",null,"App developed for Wild Code School's second group project in React Web Dev course."),r.a.createElement("p",null,"Here we tried to apply what was learned in just one month. More than a showcase of knowledge, we wanted to train and practice with an ambicious project for newcomers... and to provide an enjoyable experience to you, dear visitor!")))},M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={error:null,errorInfo:null},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Oh no! Something went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Ops! This is not the page you are looking for!"),r.a.createElement("h3",null,"Now dog is sad it only exists in his imagination..."),r.a.createElement("img",{src:"https://i.imgur.com/ZSzQ3W4.png?1",alt:""}),r.a.createElement("p",null,r.a.createElement(h.b,{to:"/"},"Click here to bring him Home ")))}}]),t}(r.a.Component);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=[{id:"",difficulty:"Any Difficulty"},{id:"easy",difficulty:"Easy"},{id:"medium",difficulty:"Medium"},{id:"hard",difficulty:"Hard"}],Q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).getQuiz=function(){var e=n.state.chosenDif.id;[13,25,26,29,30].includes(n.state.chosenCat.id)&&(e=""),fetch("https://opentdb.com/api.php?amount=10&category=".concat(n.state.chosenCat.id,"&difficulty=").concat(e,"&type=multiple&encode=url3986")).then((function(e){return e.json()})).then((function(e){n.setState((function(t){return _({},t,{quizInfo:e.results,seconds:0})}),(function(){return n.props.history.push("/quiz")}))}))},n.getCategories=function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){n.setState((function(t){return _({},t,{categories:[{id:0,name:"Any Category"}].concat(Object(s.a)(e.trivia_categories))})}))}))},n.handleCategory=function(e){n.setState({chosenCat:e})},n.handleDifficulty=function(e){n.setState({chosenDif:e})},n.updateUserAnswer=function(e,t){n.setState((function(n){var a=n.quizInfo.map((function(n,a){return a===e-1&&(n.user_answer=t),n}));return _({},n,{quizInfo:a})}))},n.updateTimer=function(){n.myInterval=setInterval((function(){n.setState((function(e){return{seconds:e.seconds+1}}))}),1e3)},n.pauseTimer=function(){clearInterval(n.myInterval)},n.state={quizInfo:{},chosenCat:{id:0,name:"Any Category"},chosenDif:{id:0,difficulty:"Any Difficulty"},categories:[{id:0,name:"Any Category"}],seconds:0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){var e=this,t=this.state,n=t.quizInfo,a=t.chosenCat,c=t.chosenDif,o=t.categories,s=t.seconds;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(w,{getQuiz:e.getQuiz,selectDif:e.handleDifficulty,chosenDif:c,difficulties:P,chosenCat:a,selectCat:e.handleCategory,categories:o,updatedTimer:e.updateTimer})}}),r.a.createElement(p.a,{exact:!0,path:"/quiz",render:function(){return r.a.createElement(k,{quizInfo:n,chosenCat:a,chosenDif:c,updateUserAnswer:e.updateUserAnswer,componentDidUpdate:e.componentDidUpdate,seconds:s,pausedTimer:e.pauseTimer})}}),r.a.createElement(p.a,{path:"/result",render:function(){return r.a.createElement(S,{quizInfo:n,chosenCat:a,chosenDif:c,seconds:s})}}),r.a.createElement(p.a,{path:"/about",component:T}),r.a.createElement(p.a,{path:"*",component:U}))))}}]),t}(a.Component),R=Object(p.g)(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0a9ee96b.chunk.js.map