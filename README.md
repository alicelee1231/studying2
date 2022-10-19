## Save The World

![스크린샷 2022-10-19 오후 2 31 33](https://user-images.githubusercontent.com/104006855/196605226-261b6a92-de0c-4083-98ad-919d3df0a702.png)

 인류가 생겨난 이후, 우리의 시대는 재화가 가장 풍부한 세상 속에 살고 있다고 해도 과언이 아니다. 
 그래서인지 우리는 쉽게 물건을 만들고 사고 버린다.<br>
 이러한 행동들로 인해 죄없는 동물들과 자연들이 파괴되고 있고, 심각한 자연재해와 질병들이 우리의 미래를 위협하고 있다.
 
 그래서 남용을 하는 근본적인 원인이 무엇인지 생각을 해보았다. <br>
 많은 원인이 존재하겠지만, 그 중, 가장 큰 원인은 자신이 얼마나 많은 양의 물건을 쓰고 버리는지 자각을 못하고 있기 때문이라고 생각했다.<br>
 만약 내가 일주일 동안 무엇을 얼마나 쓰고 버렸는지 기록을 하고 공유를 한다면, 자신이 얼마나 남용을 하는지 깨닫게 되고, 자연에 대한 미안한 마음을 가지고 조금이나마 줄이도록 노력을 할 것이라 생각했다.
<br> 그래서 해당 플랫폼을 만들게 되었다.
 
 해당 플랫폼을 통해서 사람들의 배출량, 그리고 자신의 어제 쓰레기 배출량을 비교해 보고, 조금이나마 남용을 줄여 나가길 바란다.  <br>

## 기술 스택
<img width="900" alt="스크린샷 2022-10-14 오후 10 10 21" src="https://user-images.githubusercontent.com/104006855/196604370-ee33b84a-f9fa-4b29-9db0-45facb00b6f2.png">


## 폴더 구조


```bash
# src
 ┣ apis
 ┃ ┣ auth
 ┃ ┃ ┣ auth.controller.ts
 ┃ ┃ ┣ auth.module.ts
 ┃ ┃ ┗ auth.service.ts
 ┃ ┣ detail
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ detail.entity.ts
 ┃ ┃ ┣ detail.controller.ts
 ┃ ┃ ┣ detail.module.ts
 ┃ ┃ ┗ detail.service.ts
 ┃ ┣ home
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ home.entity.ts
 ┃ ┃ ┣ home.controller.ts
 ┃ ┃ ┣ home.module.ts
 ┃ ┃ ┗ home.service.ts
 ┃ ┣ main
 ┃ ┃ ┣ main.controller.ts
 ┃ ┃ ┣ main.module.ts
 ┃ ┃ ┗ main.service.ts
 ┃ ┣ update
 ┃ ┃ ┣ dto
 ┃ ┃ ┃ ┗ update.usage.input.ts
 ┃ ┃ ┣ update.controller.ts
 ┃ ┃ ┣ update.module.ts
 ┃ ┃ ┗ update.service.ts
 ┃ ┣ usage
 ┃ ┃ ┣ dto
 ┃ ┃ ┃ ┣ create.usage.input.ts
 ┃ ┃ ┃ ┗ update.usage.input.ts
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ usage.entity.ts
 ┃ ┃ ┣ usage.controller.ts
 ┃ ┃ ┣ usage.module.ts
 ┃ ┃ ┗ usage.service.ts
 ┃ ┗ user
 ┃ ┃ ┣ dto
 ┃ ┃ ┃ ┗ create.user.input.ts
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ user.entity.ts
 ┃ ┃ ┣ user.controller.ts
 ┃ ┃ ┣ user.module.ts
 ┃ ┃ ┗ user.service.ts
 ┣ common
 ┃ ┣ auth
 ┃ ┃ ┣ jwt-social-google.strategy.ts
 ┃ ┃ ┣ jwt-social-kakao.strategy.ts
 ┃ ┃ ┗ jwt-social-naver.strategy.ts
 ┃ ┣ types
 ┃ ┃ ┗ context.ts
 ┃ ┗ jwt-key.strategy.ts
 ┣ public
 ┃ ┣ css
 ┃ ┃ ┣ about.css
 ┃ ┃ ┣ common.css
 ┃ ┃ ┣ detail.css
 ┃ ┃ ┣ home.css
 ┃ ┃ ┣ login.css
 ┃ ┃ ┣ signUp.css
 ┃ ┃ ┣ usage.css
 ┃ ┃ ┗ write.css
 ┃ ┣ images
 ┃ ┃ ┣ .DS_Store
 ┃ ┃ ┣ background.jpg
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ favicon.png
 ┃ ┃ ┣ google.svg
 ┃ ┃ ┣ kakao.svg
 ┃ ┃ ┣ naver.svg
 ┃ ┃ ┗ smallimage.jpg
 ┃ ┣ js
 ┃ ┃ ┣ delete.js
 ┃ ┃ ┣ detail.js
 ┃ ┃ ┣ login.js
 ┃ ┃ ┣ signUp.js
 ┃ ┃ ┣ update.js
 ┃ ┃ ┣ usage.js
 ┃ ┃ ┗ write.js
 ┃ ┗ .DS_Store
 ┣ views
 ┃ ┣ about.ejs
 ┃ ┣ detail.ejs
 ┃ ┣ home.ejs
 ┃ ┣ login.ejs
 ┃ ┣ logout.ejs
 ┃ ┣ signUp.ejs
 ┃ ┣ update.ejs
 ┃ ┣ usage.ejs
 ┃ ┗ write.ejs
 ┣ .DS_Store
 ┣ app.controller.ts
 ┣ app.module.ts
 ┣ app.service.ts
 ┗ main.ts
```

<div style="border-top:2px solid gray; margin: 30px 0;"></div>

<h2 style="border-bottom:2px solid gray; margin: 30px 0;">.env설정</h2>
<div style="margin-top: 20px 0">
  <li>GOOGLE_CLIENT_ID</li>
  <li>GOOGLE_CLIENT_SECRET</li>
  <li>NAVER_CLIENT_ID</li>
  <li>NAVER_CLIENT_SECRET</li>
  <li>KAKAO_CLIENT_ID</li>
  <li>KEY</li>
</div>


