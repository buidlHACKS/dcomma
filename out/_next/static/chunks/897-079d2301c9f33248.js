(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{4431:function(e,r,n){var t;!function(i){"use strict";var o,u=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,l=Math.ceil,f=Math.floor,c="[BigNumber Error] ",s=c+"Number primitive has more than 15 significant digits: ",a=1e14,h=14,p=9007199254740991,g=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],d=1e7,v=1e9;function m(e){var r=0|e;return e>0||e===r?r:r-1}function y(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=h-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function w(e,r){var n,t,i=e.c,o=r.c,u=e.s,l=r.s,f=e.e,c=r.e;if(!u||!l)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-l:u;if(u!=l)return u;if(n=u<0,t=f==c,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>c^n?1:-1;for(l=(f=i.length)<(c=o.length)?f:c,u=0;u<l;u++)if(i[u]!=o[u])return i[u]>o[u]^n?1:-1;return f==c?0:f>c^n?1:-1}function b(e,r,n,t){if(e<r||e>n||e!==f(e))throw Error(c+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function O(e){var r=e.c.length-1;return m(e.e/h)==r&&e.c[r]%2!=0}function E(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function N(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}o=function e(r){var n,t,i,o=D.prototype={constructor:D,toString:null,valueOf:null},A=new D(1),S=20,I=4,L=-7,R=21,_=-1e7,C=1e7,M=!1,x=1,P=0,U={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},j="0123456789abcdefghijklmnopqrstuvwxyz",k=!0;function D(e,r){var n,o,l,c,a,g,d,v,m=this;if(!(m instanceof D))return new D(e,r);if(null==r){if(e&&!0===e._isBigNumber)return m.s=e.s,void(!e.c||e.e>C?m.c=m.e=null:e.e<_?m.c=[m.e=0]:(m.e=e.e,m.c=e.c.slice()));if((g="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,a=e;a>=10;a/=10,c++);return void(c>C?m.c=m.e=null:(m.e=c,m.c=[e]))}v=String(e)}else{if(!u.test(v=String(e)))return i(m,v,g);m.s=45==v.charCodeAt(0)?(v=v.slice(1),-1):1}(c=v.indexOf("."))>-1&&(v=v.replace(".","")),(a=v.search(/e/i))>0?(c<0&&(c=a),c+=+v.slice(a+1),v=v.substring(0,a)):c<0&&(c=v.length)}else{if(b(r,2,j.length,"Base"),10==r&&k)return F(m=new D(e),S+m.e+1,I);if(v=String(e),g="number"==typeof e){if(0*e!=0)return i(m,v,g,r);if(m.s=1/e<0?(v=v.slice(1),-1):1,D.DEBUG&&v.replace(/^0\.0*|\./,"").length>15)throw Error(s+e)}else m.s=45===v.charCodeAt(0)?(v=v.slice(1),-1):1;for(n=j.slice(0,r),c=a=0,d=v.length;a<d;a++)if(n.indexOf(o=v.charAt(a))<0){if("."==o){if(a>c){c=d;continue}}else if(!l&&(v==v.toUpperCase()&&(v=v.toLowerCase())||v==v.toLowerCase()&&(v=v.toUpperCase()))){l=!0,a=-1,c=0;continue}return i(m,String(e),g,r)}g=!1,(c=(v=t(v,r,10,m.s)).indexOf("."))>-1?v=v.replace(".",""):c=v.length}for(a=0;48===v.charCodeAt(a);a++);for(d=v.length;48===v.charCodeAt(--d););if(v=v.slice(a,++d)){if(d-=a,g&&D.DEBUG&&d>15&&(e>p||e!==f(e)))throw Error(s+m.s*e);if((c=c-a-1)>C)m.c=m.e=null;else if(c<_)m.c=[m.e=0];else{if(m.e=c,m.c=[],a=(c+1)%h,c<0&&(a+=h),a<d){for(a&&m.c.push(+v.slice(0,a)),d-=h;a<d;)m.c.push(+v.slice(a,a+=h));a=h-(v=v.slice(a)).length}else a-=d;for(;a--;v+="0");m.c.push(+v)}}else m.c=[m.e=0]}function B(e,r,n,t){var i,o,u,l,f;if(null==n?n=I:b(n,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)f=y(e.c),f=1==t||2==t&&(u<=L||u>=R)?E(f,u):N(f,u,"0");else if(o=(e=F(new D(e),r,n)).e,l=(f=y(e.c)).length,1==t||2==t&&(r<=o||o<=L)){for(;l<r;f+="0",l++);f=E(f,o)}else if(r-=u,f=N(f,o,"0"),o+1>l){if(--r>0)for(f+=".";r--;f+="0");}else if((r+=o-l)>0)for(o+1==l&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function T(e,r){for(var n,t=1,i=new D(e[0]);t<e.length;t++){if(!(n=new D(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function G(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*h-1)>C?e.c=e.e=null:n<_?e.c=[e.e=0]:(e.e=n,e.c=r),e}function F(e,r,n,t){var i,o,u,c,s,p,d,v=e.c,m=g;if(v){e:{for(i=1,c=v[0];c>=10;c/=10,i++);if((o=r-i)<0)o+=h,u=r,d=(s=v[p=0])/m[i-u-1]%10|0;else if((p=l((o+1)/h))>=v.length){if(!t)break e;for(;v.length<=p;v.push(0));s=d=0,i=1,u=(o%=h)-h+1}else{for(s=c=v[p],i=1;c>=10;c/=10,i++);d=(u=(o%=h)-h+i)<0?0:s/m[i-u-1]%10|0}if(t=t||r<0||null!=v[p+1]||(u<0?s:s%m[i-u-1]),t=n<4?(d||t)&&(0==n||n==(e.s<0?3:2)):d>5||5==d&&(4==n||t||6==n&&(o>0?u>0?s/m[i-u]:0:v[p-1])%10&1||n==(e.s<0?8:7)),r<1||!v[0])return v.length=0,t?(r-=e.e+1,v[0]=m[(h-r%h)%h],e.e=-r||0):v[0]=e.e=0,e;if(0==o?(v.length=p,c=1,p--):(v.length=p+1,c=m[h-o],v[p]=u>0?f(s/m[i-u]%m[u])*c:0),t)for(;;){if(0==p){for(o=1,u=v[0];u>=10;u/=10,o++);for(u=v[0]+=c,c=1;u>=10;u/=10,c++);o!=c&&(e.e++,v[0]==a&&(v[0]=1));break}if(v[p]+=c,v[p]!=a)break;v[p--]=0,c=1}for(o=v.length;0===v[--o];v.pop());}e.e>C?e.c=e.e=null:e.e<_&&(e.c=[e.e=0])}return e}function q(e){var r,n=e.e;return null===n?e.toString():(r=y(e.c),r=n<=L||n>=R?E(r,n):N(r,n,"0"),e.s<0?"-"+r:r)}return D.clone=e,D.ROUND_UP=0,D.ROUND_DOWN=1,D.ROUND_CEIL=2,D.ROUND_FLOOR=3,D.ROUND_HALF_UP=4,D.ROUND_HALF_DOWN=5,D.ROUND_HALF_EVEN=6,D.ROUND_HALF_CEIL=7,D.ROUND_HALF_FLOOR=8,D.EUCLID=9,D.config=D.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(c+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(b(n=e[r],0,v,r),S=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(b(n=e[r],0,8,r),I=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(b(n[0],-v,0,r),b(n[1],0,v,r),L=n[0],R=n[1]):(b(n,-v,v,r),L=-(R=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)b(n[0],-v,-1,r),b(n[1],1,v,r),_=n[0],C=n[1];else{if(b(n,-v,v,r),!n)throw Error(c+r+" cannot be zero: "+n);_=-(C=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(c+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw M=!n,Error(c+"crypto unavailable");M=n}else M=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(b(n=e[r],0,9,r),x=n),e.hasOwnProperty(r="POW_PRECISION")&&(b(n=e[r],0,v,r),P=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(c+r+" not an object: "+n);U=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(c+r+" invalid: "+n);k="0123456789"==n.slice(0,10),j=n}}return{DECIMAL_PLACES:S,ROUNDING_MODE:I,EXPONENTIAL_AT:[L,R],RANGE:[_,C],CRYPTO:M,MODULO_MODE:x,POW_PRECISION:P,FORMAT:U,ALPHABET:j}},D.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!D.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&i>=-v&&i<=v&&i===f(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if((r=(i+1)%h)<1&&(r+=h),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||n>=a||n!==f(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(c+"Invalid BigNumber: "+e)},D.maximum=D.max=function(){return T(arguments,o.lt)},D.minimum=D.min=function(){return T(arguments,o.gt)},D.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return f(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,o,u,s=0,a=[],p=new D(A);if(null==e?e=S:b(e,0,v),o=l(e/h),M)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(o*=2));s<o;)(u=131072*n[s]+(n[s+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[s]=t[0],n[s+1]=t[1]):(a.push(u%1e14),s+=2);s=o/2}else{if(!crypto.randomBytes)throw M=!1,Error(c+"crypto unavailable");for(n=crypto.randomBytes(o*=7);s<o;)(u=281474976710656*(31&n[s])+1099511627776*n[s+1]+4294967296*n[s+2]+16777216*n[s+3]+(n[s+4]<<16)+(n[s+5]<<8)+n[s+6])>=9e15?crypto.randomBytes(7).copy(n,s):(a.push(u%1e14),s+=7);s=o/7}if(!M)for(;s<o;)(u=r())<9e15&&(a[s++]=u%1e14);for(o=a[--s],e%=h,o&&e&&(u=g[h-e],a[s]=f(o/u)*u);0===a[s];a.pop(),s--);if(s<0)a=[i=0];else{for(i=-1;0===a[0];a.splice(0,1),i-=h);for(s=1,u=a[0];u>=10;u/=10,s++);s<h&&(i-=h-s)}return p.e=i,p.c=a,p}}(),D.sum=function(){for(var e=1,r=arguments,n=new D(r[0]);e<r.length;)n=n.plus(r[e++]);return n},t=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,u=[0],l=0,f=e.length;l<f;){for(o=u.length;o--;u[o]*=r);for(u[0]+=t.indexOf(e.charAt(l++)),i=0;i<u.length;i++)u[i]>n-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/n|0,u[i]%=n)}return u.reverse()}return function(t,i,o,u,l){var f,c,s,a,h,p,g,d,v=t.indexOf("."),m=S,w=I;for(v>=0&&(a=P,P=0,t=t.replace(".",""),p=(d=new D(i)).pow(t.length-v),P=a,d.c=r(N(y(p.c),p.e,"0"),10,o,e),d.e=d.c.length),s=a=(g=r(t,i,o,l?(f=j,e):(f=e,j))).length;0==g[--a];g.pop());if(!g[0])return f.charAt(0);if(v<0?--s:(p.c=g,p.e=s,p.s=u,g=(p=n(p,d,m,w,o)).c,h=p.r,s=p.e),v=g[c=s+m+1],a=o/2,h=h||c<0||null!=g[c+1],h=w<4?(null!=v||h)&&(0==w||w==(p.s<0?3:2)):v>a||v==a&&(4==w||h||6==w&&1&g[c-1]||w==(p.s<0?8:7)),c<1||!g[0])t=h?N(f.charAt(1),-m,f.charAt(0)):f.charAt(0);else{if(g.length=c,h)for(--o;++g[--c]>o;)g[c]=0,c||(++s,g=[1].concat(g));for(a=g.length;!g[--a];);for(v=0,t="";v<=a;t+=f.charAt(g[v++]));t=N(t,s,f.charAt(0))}return t}}(),n=function(){function e(e,r,n){var t,i,o,u,l=0,f=e.length,c=r%d,s=r/d|0;for(e=e.slice();f--;)l=((i=c*(o=e[f]%d)+(t=s*o+(u=e[f]/d|0)*c)%d*d+l)/n|0)+(t/d|0)+s*u,e[f]=i%n;return l&&(e=[l].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,o,u,l){var c,s,p,g,d,v,y,w,b,O,E,N,A,S,I,L,R,_=t.s==i.s?1:-1,C=t.c,M=i.c;if(!C||!C[0]||!M||!M[0])return new D(t.s&&i.s&&(C?!M||C[0]!=M[0]:M)?C&&0==C[0]||!M?0*_:_/0:NaN);for(b=(w=new D(_)).c=[],_=o+(s=t.e-i.e)+1,l||(l=a,s=m(t.e/h)-m(i.e/h),_=_/h|0),p=0;M[p]==(C[p]||0);p++);if(M[p]>(C[p]||0)&&s--,_<0)b.push(1),g=!0;else{for(S=C.length,L=M.length,p=0,_+=2,(d=f(l/(M[0]+1)))>1&&(M=e(M,d,l),C=e(C,d,l),L=M.length,S=C.length),A=L,E=(O=C.slice(0,L)).length;E<L;O[E++]=0);R=M.slice(),R=[0].concat(R),I=M[0],M[1]>=l/2&&I++;do{if(d=0,(c=r(M,O,L,E))<0){if(N=O[0],L!=E&&(N=N*l+(O[1]||0)),(d=f(N/I))>1)for(d>=l&&(d=l-1),y=(v=e(M,d,l)).length,E=O.length;1==r(v,O,y,E);)d--,n(v,L<y?R:M,y,l),y=v.length,c=1;else 0==d&&(c=d=1),y=(v=M.slice()).length;if(y<E&&(v=[0].concat(v)),n(O,v,E,l),E=O.length,-1==c)for(;r(M,O,L,E)<1;)d++,n(O,L<E?R:M,E,l),E=O.length}else 0===c&&(d++,O=[0]);b[p++]=d,O[0]?O[E++]=C[A]||0:(O=[C[A]],E=1)}while((A++<S||null!=O[0])&&_--);g=null!=O[0],b[0]||b.splice(0,1)}if(l==a){for(p=1,_=b[0];_>=10;_/=10,p++);F(w,o+(w.e=p+s*h-1)+1,u,g)}else w.e=s,w.r=+g;return w}}(),i=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,l,f){var s,a=l?u:u.replace(i,"");if(t.test(a))o.s=isNaN(a)?null:a<0?-1:1;else{if(!l&&(a=a.replace(e,(function(e,r,n){return s="x"==(n=n.toLowerCase())?16:"b"==n?2:8,f&&f!=s?e:r})),f&&(s=f,a=a.replace(r,"$1").replace(n,"0.$1")),u!=a))return new D(a,s);if(D.DEBUG)throw Error(c+"Not a"+(f?" base "+f:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),o.absoluteValue=o.abs=function(){var e=new D(this);return e.s<0&&(e.s=1),e},o.comparedTo=function(e,r){return w(this,new D(e,r))},o.decimalPlaces=o.dp=function(e,r){var n,t,i,o=this;if(null!=e)return b(e,0,v),null==r?r=I:b(r,0,8),F(new D(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-m(this.e/h))*h,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},o.dividedBy=o.div=function(e,r){return n(this,new D(e,r),S,I)},o.dividedToIntegerBy=o.idiv=function(e,r){return n(this,new D(e,r),0,1)},o.exponentiatedBy=o.pow=function(e,r){var n,t,i,o,u,s,a,p,g=this;if((e=new D(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+q(e));if(null!=r&&(r=new D(r)),u=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return p=new D(Math.pow(+q(g),u?2-O(e):+q(e))),r?p.mod(r):p;if(s=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new D(NaN);(t=!s&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||u&&g.c[1]>=24e7:g.c[0]<8e13||u&&g.c[0]<=9999975e7)))return o=g.s<0&&O(e)?-0:0,g.e>-1&&(o=1/o),new D(s?1/o:o);P&&(o=l(P/h+2))}for(u?(n=new D(.5),s&&(e.s=1),a=O(e)):a=(i=Math.abs(+q(e)))%2,p=new D(A);;){if(a){if(!(p=p.times(g)).c)break;o?p.c.length>o&&(p.c.length=o):t&&(p=p.mod(r))}if(i){if(0===(i=f(i/2)))break;a=i%2}else if(F(e=e.times(n),e.e+1,1),e.e>14)a=O(e);else{if(0===(i=+q(e)))break;a=i%2}g=g.times(g),o?g.c&&g.c.length>o&&(g.c.length=o):t&&(g=g.mod(r))}return t?p:(s&&(p=A.div(p)),r?p.mod(r):o?F(p,P,I,undefined):p)},o.integerValue=function(e){var r=new D(this);return null==e?e=I:b(e,0,8),F(r,r.e+1,e)},o.isEqualTo=o.eq=function(e,r){return 0===w(this,new D(e,r))},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(e,r){return w(this,new D(e,r))>0},o.isGreaterThanOrEqualTo=o.gte=function(e,r){return 1===(r=w(this,new D(e,r)))||0===r},o.isInteger=function(){return!!this.c&&m(this.e/h)>this.c.length-2},o.isLessThan=o.lt=function(e,r){return w(this,new D(e,r))<0},o.isLessThanOrEqualTo=o.lte=function(e,r){return-1===(r=w(this,new D(e,r)))||0===r},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&0==this.c[0]},o.minus=function(e,r){var n,t,i,o,u=this,l=u.s;if(r=(e=new D(e,r)).s,!l||!r)return new D(NaN);if(l!=r)return e.s=-r,u.plus(e);var f=u.e/h,c=e.e/h,s=u.c,p=e.c;if(!f||!c){if(!s||!p)return s?(e.s=-r,e):new D(p?u:NaN);if(!s[0]||!p[0])return p[0]?(e.s=-r,e):new D(s[0]?u:3==I?-0:0)}if(f=m(f),c=m(c),s=s.slice(),l=f-c){for((o=l<0)?(l=-l,i=s):(c=f,i=p),i.reverse(),r=l;r--;i.push(0));i.reverse()}else for(t=(o=(l=s.length)<(r=p.length))?l:r,l=r=0;r<t;r++)if(s[r]!=p[r]){o=s[r]<p[r];break}if(o&&(i=s,s=p,p=i,e.s=-e.s),(r=(t=p.length)-(n=s.length))>0)for(;r--;s[n++]=0);for(r=a-1;t>l;){if(s[--t]<p[t]){for(n=t;n&&!s[--n];s[n]=r);--s[n],s[t]+=a}s[t]-=p[t]}for(;0==s[0];s.splice(0,1),--c);return s[0]?G(e,s,c):(e.s=3==I?-1:1,e.c=[e.e=0],e)},o.modulo=o.mod=function(e,r){var t,i,o=this;return e=new D(e,r),!o.c||!e.s||e.c&&!e.c[0]?new D(NaN):!e.c||o.c&&!o.c[0]?new D(o):(9==x?(i=e.s,e.s=1,t=n(o,e,0,3),e.s=i,t.s*=i):t=n(o,e,0,x),(e=o.minus(t.times(e))).c[0]||1!=x||(e.s=o.s),e)},o.multipliedBy=o.times=function(e,r){var n,t,i,o,u,l,f,c,s,p,g,v,y,w,b,O=this,E=O.c,N=(e=new D(e,r)).c;if(!E||!N||!E[0]||!N[0])return!O.s||!e.s||E&&!E[0]&&!N||N&&!N[0]&&!E?e.c=e.e=e.s=null:(e.s*=O.s,E&&N?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=m(O.e/h)+m(e.e/h),e.s*=O.s,(f=E.length)<(p=N.length)&&(y=E,E=N,N=y,i=f,f=p,p=i),i=f+p,y=[];i--;y.push(0));for(w=a,b=d,i=p;--i>=0;){for(n=0,g=N[i]%b,v=N[i]/b|0,o=i+(u=f);o>i;)n=((c=g*(c=E[--u]%b)+(l=v*c+(s=E[u]/b|0)*g)%b*b+y[o]+n)/w|0)+(l/b|0)+v*s,y[o--]=c%w;y[o]=n}return n?++t:y.splice(0,1),G(e,y,t)},o.negated=function(){var e=new D(this);return e.s=-e.s||null,e},o.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new D(e,r)).s,!i||!r)return new D(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/h,u=e.e/h,l=t.c,f=e.c;if(!o||!u){if(!l||!f)return new D(i/0);if(!l[0]||!f[0])return f[0]?e:new D(l[0]?t:0*i)}if(o=m(o),u=m(u),l=l.slice(),i=o-u){for(i>0?(u=o,n=f):(i=-i,n=l),n.reverse();i--;n.push(0));n.reverse()}for((i=l.length)-(r=f.length)<0&&(n=f,f=l,l=n,r=i),i=0;r;)i=(l[--r]=l[r]+f[r]+i)/a|0,l[r]=a===l[r]?0:l[r]%a;return i&&(l=[i].concat(l),++u),G(e,l,u)},o.precision=o.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return b(e,1,v),null==r?r=I:b(r,0,8),F(new D(o),e,r);if(!(n=o.c))return null;if(t=(i=n.length-1)*h+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},o.shiftedBy=function(e){return b(e,-9007199254740991,p),this.times("1e"+e)},o.squareRoot=o.sqrt=function(){var e,r,t,i,o,u=this,l=u.c,f=u.s,c=u.e,s=S+4,a=new D("0.5");if(1!==f||!l||!l[0])return new D(!f||f<0&&(!l||l[0])?NaN:l?u:1/0);if(0==(f=Math.sqrt(+q(u)))||f==1/0?(((r=y(l)).length+c)%2==0&&(r+="0"),f=Math.sqrt(+r),c=m((c+1)/2)-(c<0||c%2),t=new D(r=f==1/0?"5e"+c:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+c)):t=new D(f+""),t.c[0])for((f=(c=t.e)+s)<3&&(f=0);;)if(o=t,t=a.times(o.plus(n(u,o,s,1))),y(o.c).slice(0,f)===(r=y(t.c)).slice(0,f)){if(t.e<c&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(F(t,t.e+S+2,1),e=!t.times(t).eq(u));break}if(!i&&(F(o,o.e+S+2,0),o.times(o).eq(u))){t=o;break}s+=4,f+=4,i=1}return F(t,t.e+S+1,I,e)},o.toExponential=function(e,r){return null!=e&&(b(e,0,v),e++),B(this,e,r,1)},o.toFixed=function(e,r){return null!=e&&(b(e,0,v),e=e+this.e+1),B(this,e,r)},o.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=U;else if("object"!=typeof n)throw Error(c+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),l=+n.groupSize,f=+n.secondaryGroupSize,s=n.groupSeparator||"",a=u[0],h=u[1],p=i.s<0,g=p?a.slice(1):a,d=g.length;if(f&&(o=l,l=f,f=o,d-=o),l>0&&d>0){for(o=d%l||l,a=g.substr(0,o);o<d;o+=l)a+=s+g.substr(o,l);f>0&&(a+=s+g.slice(o)),p&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},o.toFraction=function(e){var r,t,i,o,u,l,f,s,a,p,d,v,m=this,w=m.c;if(null!=e&&(!(f=new D(e)).isInteger()&&(f.c||1!==f.s)||f.lt(A)))throw Error(c+"Argument "+(f.isInteger()?"out of range: ":"not an integer: ")+q(f));if(!w)return new D(m);for(r=new D(A),a=t=new D(A),i=s=new D(A),v=y(w),u=r.e=v.length-m.e-1,r.c[0]=g[(l=u%h)<0?h+l:l],e=!e||f.comparedTo(r)>0?u>0?r:a:f,l=C,C=1/0,f=new D(v),s.c[0]=0;p=n(f,r,0,1),1!=(o=t.plus(p.times(i))).comparedTo(e);)t=i,i=o,a=s.plus(p.times(o=a)),s=o,r=f.minus(p.times(o=r)),f=o;return o=n(e.minus(t),i,0,1),s=s.plus(o.times(a)),t=t.plus(o.times(i)),s.s=a.s=m.s,d=n(a,i,u*=2,I).minus(m).abs().comparedTo(n(s,t,u,I).minus(m).abs())<1?[a,i]:[s,t],C=l,d},o.toNumber=function(){return+q(this)},o.toPrecision=function(e,r){return null!=e&&b(e,1,v),B(this,e,r,2)},o.toString=function(e){var r,n=this,i=n.s,o=n.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=L||o>=R?E(y(n.c),o):N(y(n.c),o,"0"):10===e&&k?r=N(y((n=F(new D(n),S+o+1,I)).c),n.e,"0"):(b(e,2,j.length,"Base"),r=t(N(y(n.c),o,"0"),10,e,i,!0)),i<0&&n.c[0]&&(r="-"+r)),r},o.valueOf=o.toJSON=function(){return q(this)},o._isBigNumber=!0,null!=r&&D.set(r),D}(),o.default=o.BigNumber=o,void 0===(t=function(){return o}.call(r,n,r,e))||(e.exports=t)}()},1551:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);u=!0);}catch(f){l=!0,i=f}finally{try{u||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},l=n(1003),f=n(880),c=n(9246);function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a={};function h(e,r,n,t){if(e&&l.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;a[r+"%"+n+(i?"%"+i:"")]=!0}}var p=u.default.forwardRef((function(e,r){var n,t=e.legacyBehavior,o=void 0===t?!0!==Boolean(!1):t,p=e.href,g=e.as,d=e.children,v=e.prefetch,m=e.passHref,y=e.replace,w=e.shallow,b=e.scroll,O=e.locale,E=e.onClick,N=e.onMouseEnter,A=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=d,o&&"string"===typeof n&&(n=u.default.createElement("a",null,n));var S,I=!1!==v,L=f.useRouter(),R=u.default.useMemo((function(){var e=i(l.resolveHref(L,p,!0),2),r=e[0],n=e[1];return{href:r,as:g?l.resolveHref(L,g):n||r}}),[L,p,g]),_=R.href,C=R.as,M=u.default.useRef(_),x=u.default.useRef(C);o&&(S=u.default.Children.only(n));var P=o?S&&"object"===typeof S&&S.ref:r,U=i(c.useIntersection({rootMargin:"200px"}),3),j=U[0],k=U[1],D=U[2],B=u.default.useCallback((function(e){x.current===C&&M.current===_||(D(),x.current=C,M.current=_),j(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[C,P,_,D,j]);u.default.useEffect((function(){var e=k&&I&&l.isLocalURL(_),r="undefined"!==typeof O?O:L&&L.locale,n=a[_+"%"+C+(r?"%"+r:"")];e&&!n&&h(L,_,C,{locale:r})}),[C,_,k,O,I,L]);var T={ref:B,onClick:function(e){o||"function"!==typeof E||E(e),o&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,r,n,t,i,o,u,f){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),r[i?"replace":"push"](n,t,{shallow:o,locale:f,scroll:u}))}(e,L,_,C,y,w,b,O)},onMouseEnter:function(e){o||"function"!==typeof N||N(e),o&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),l.isLocalURL(_)&&h(L,_,C,{priority:!0})}};if(!o||m||"a"===S.type&&!("href"in S.props)){var G="undefined"!==typeof O?O:L&&L.locale,F=L&&L.isLocaleDomain&&l.getDomainLocale(C,G,L&&L.locales,L&&L.domainLocales);T.href=F||l.addBasePath(l.addLocale(C,G,L&&L.defaultLocale))}return o?u.default.cloneElement(S,T):u.default.createElement("a",Object.assign({},A,T),n)}));r.default=p,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);u=!0);}catch(f){l=!0,i=f}finally{try{u||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!l,s=o.useRef(),a=i(o.useState(!1),2),h=a[0],p=a[1],g=i(o.useState(r?r.current:null),2),d=g[0],v=g[1],m=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||h||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=f.get(t):(r=f.get(n),c.push(n));if(r)return r;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return f.set(n,r={id:n,observer:o,elements:i}),r}(n),i=t.id,o=t.observer,u=t.elements;return u.set(e,r),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),f.delete(i);var r=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:d,rootMargin:n}))}),[t,d,n,h]),y=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!l&&!h){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){r&&v(r.current)}),[r]),[m,h,y]};var o=n(7294),u=n(4686),l="undefined"!==typeof IntersectionObserver;var f=new Map,c=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},1664:function(e,r,n){e.exports=n(1551)},1163:function(e,r,n){e.exports=n(880)}}]);