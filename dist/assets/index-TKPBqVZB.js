(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>30 Days of Javascript</h1>

        <a href ='#' target="_blank"><button>Day-1</button></a> 
        <a href ='#'><button>Day-2</button></a>
        <a href ='#'><button>Day-3</button></a>
        <a href ='#'><button>Day-4</button></a>
        <a href ='#'><button>Day-5</button></a>
        <a href ='#'><button>Day-6</button></a>
        <a href ='#'><button>Day-7</button></a>
        <a href ='#'><button>Day-8</button></a>
        <a href ='#'><button>Day-9</button></a>
        <a href ='#'><button>Day-10</button></a>
        <a href ='#'><button>Day-11</button></a>
        <a href ='#'><button>Day-12</button></a>
        <a href ='#'><button>Day-13</button></a>
        <a href ='#'><button>Day-14</button></a>
        <a href ='#'><button>Day-15</button></a>
        <a href ='#'><button>Day-16</button></a>
        <a href ='#'><button>Day-17</button></a>
        <a href ='#'><button>Day-18</button></a>
        <a href ='#'><button>Day-19</button></a>
        <a href ='#'><button>Day-20</button></a>
        <a href ='#'><button>Day-21</button></a>
        <a href ='#'><button>Day-22</button></a>
        <a href ='#'><button>Day-23</button></a>
        <a href ='#'><button>Day-24</button></a>
        <a href ='#'><button>Day-25</button></a>
        <a href ='#'><button>Day-26</button></a>
        <a href ='#'><button>Day-27</button></a>
        <a href ='#'><button>Day-28</button></a>
        <a href ='#'><button>Day-29</button></a>
        <a href ='#'><button>Day-30</button></a>
  </div>
`;
