# GIT SETTING

1. Git 설치 및 회원가입
- [https://git-scm.com/download]: GIT DOWNLOAD

- [https://github.com/]: GITHUB 회원가입



2. 저장소 권한 부여
- Settings > Collaborators > 권한 부여할 ID 입력.
![gitremote01](https://user-images.githubusercontent.com/43169339/48525004-d1bfa800-e8c5-11e8-8309-a8d5132efcfb.PNG)

- 권한 받은 사용자는 자신의 Email에 들어가 버튼 클릭.
![gitremote02](https://user-images.githubusercontent.com/43169339/48525191-84900600-e8c6-11e8-9a3e-d28b54a9a977.PNG)



3. 작업환경 셋팅
- 설치한 Git bash 실행 및 저장소 복사할 폴더 생성.
```sh
$ mkdir 폴더명 (폴더 생성)
$ cd 생성한 폴더명
```
![gitremote03](https://user-images.githubusercontent.com/43169339/48525513-c8cfd600-e8c7-11e8-97da-0ab8233373c9.PNG)

(터미널에서 폴더 생성)

![gitsetting01](https://user-images.githubusercontent.com/43169339/49420388-874b9000-f7ce-11e8-97ff-074bc23498b6.PNG)
(VS CODE 폴더 생성)


- 권한 부여받은 저장소, 생성한 폴더에 복사
```sh
$ git clone 저장소 주소 . (끝에 . 입력해야하 생성한 폴더에 파일만 복사함)
```
![gitremote04](https://user-images.githubusercontent.com/43169339/48525731-86f35f80-e8c8-11e8-8b45-09d749d7d3f3.PNG)

![gitsetting02](https://user-images.githubusercontent.com/43169339/49420761-5bc9a500-f7d0-11e8-946c-034f74e55b60.PNG)
(빈 폴더가 아닌 경우 복사 불가)


- 저장소 REMOTE 연결 및 확인.
```sh
$ git remote add origin 저장소 주소 (clone을 할 경우 자동으로 연결되어 있음)
$ git remote -v (remote 연결 확인)
$ git remote remove origin (remote 삭제 - 연결이 잘못되어 있으면 삭제 후 다시 연결)
```
![gitremote05](https://user-images.githubusercontent.com/43169339/48526074-a50d8f80-e8c9-11e8-9732-adc4dd3f915e.PNG)

4. 저장소 업로드
- 수정된 파일 또는 추가된 파일 추가. (add)
```sh
$ git add Test.txt
or
$ git add . (전체 파일 추가)
```

- 파일 커밋. (commit -m "설명")
```sh
$ git commit -m "Test"
```

- 푸쉬.(push)
```sh
$ git push
```
![gitremote06](https://user-images.githubusercontent.com/43169339/48526364-c02ccf00-e8ca-11e8-92c4-7e0a51316629.PNG)

5. fetch, rebase 사용
- 푸쉬를 할 때 아래와 같은 메시지가 뜨는 경우, 저장소의 최신 커밋 이력을 로컬에 포함하고 있지 않기 때문이다.
![gitsetting03](https://user-images.githubusercontent.com/43169339/49421458-515cda80-f7d3-11e8-874a-48b33889349f.PNG)

- fetch를 사용하여 저장소에 최신 커밋 이력을 로컬 저장소로 가져옴.
```sh
$ git fetch origin
$ git log --oneline --all --graph (변경된 이력 확인)
```
![gitsetting04](https://user-images.githubusercontent.com/43169339/49422014-718d9900-f7d5-11e8-84e1-69aa6e889828.PNG)

- rebase 사용.
```sh
$ git rebase origin/master
```
![gitsetting05](https://user-images.githubusercontent.com/43169339/49422126-ea8cf080-f7d5-11e8-95ed-63fcfc5987f7.PNG)



### 참고사이트
- Git을 이용한 협업 워크플로우 (https://lhy.kr/git-workflow)
- Fork를 이용한 깃 협업플로우 (http://playinlion.tistory.com/29)
- GitHub로 협업하는 방법 - Gitflow Workflow (https://gmlwjd9405.github.io/2018/05/12/how-to-collaborate-on-GitHub-3.html)
- 우린 Git-flow를 사용하고 있어요 - 우아한 형제들 (http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html) 
