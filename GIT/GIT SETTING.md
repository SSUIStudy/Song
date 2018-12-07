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
$ git clone 저장소 주소 . (끝에 . 입력해야 생성한 폴더에 파일만 복사함)
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


- rebase 사용했는데 충돌시. (같은 파일을 수정하여서 변경 내역을 자동으로 합치질 못함. 이러한 경우 수동으로 해결)
![gitsetting08](https://user-images.githubusercontent.com/43169339/49429826-dc969a00-f7ec-11e8-9ea2-738664b1a834.PNG)

- status를 사용하여 어떤 파일 충돌이 발생했는지 확인.
```sh
$ git status
```
![gitsetting09](https://user-images.githubusercontent.com/43169339/49430122-8f66f800-f7ed-11e8-9be9-19354c5ff5d8.PNG)

- 충돌이 발생한 파일을 열어 수정.
(VS CODE의 경우, 두 변경 사항 수락 클릭시 자동으로 수정됨)
![gitsetting10](https://user-images.githubusercontent.com/43169339/49430233-d1903980-f7ed-11e8-9b11-e12a143c7e67.PNG)

- 변경된 파일 GIT에 추가, rebase 다시 진행.
```sh
$ git add .
$ git rebase --continue
```
![gitsetting11](https://user-images.githubusercontent.com/43169339/49430468-73178b00-f7ee-11e8-84f8-360dda3f1c0a.PNG)
***
***


FORK를 이용한 협업 플로우
========================

### 1. FORK 및 자신의 로컬에 복사

- 원격 저장소를 자신의 저장소로 FORK.

![gitworkflow01](https://user-images.githubusercontent.com/43169339/48595829-b8882b80-e999-11e8-8fc7-891efaeefcb0.PNG)

- FORK 후 자신의 로컬에 복사
```sh
$ git clone FORK한 저장소 주소
```
![gitworkflow02](https://user-images.githubusercontent.com/43169339/48595966-406e3580-e99a-11e8-8096-33fb9b3db7f6.PNG)

- 타인의 저장소 REMOTE
```sh
$ git remote add 저장소 이름 저장소 주소
```
![gitworkflow03](https://user-images.githubusercontent.com/43169339/48599183-f3925b00-e9a9-11e8-8796-c3f5a5952194.PNG)
***

### 2. Pull requests

- 수정 및 추가된 파일 추가, 커밋, 푸쉬
```sh
$ git add 수정 및 추가된 파일 ($ git add .)

$ git commit -m "msg"

$ git push
```
![gitworkflow04](https://user-images.githubusercontent.com/43169339/48599413-df9b2900-e9aa-11e8-9fb6-43838b0227f5.PNG)

- 자신의 저장소에서 New pull request 클릭

![gitworkflow05](https://user-images.githubusercontent.com/43169339/48599738-600e5980-e9ac-11e8-9d13-698f5d6793e7.PNG)

- 타인의 저장소로 이동 후 커밋 및 수정 내용 확인 가능, 확인 후 이상이 없으면 Create new pull request 클릭

![gitworkflow06](https://user-images.githubusercontent.com/43169339/48599740-60a6f000-e9ac-11e8-9a8d-c4b16ff1289e.PNG)

- 코멘트 입력 후 Create pull request 클릭

![gitworkflow07](https://user-images.githubusercontent.com/43169339/48599741-60a6f000-e9ac-11e8-9ee4-cde6f2e934be.PNG)

- 담당자는 Pull request 검토 후 이상이 없으면 merge 승인

![gitworkflow08](https://user-images.githubusercontent.com/43169339/48599743-60a6f000-e9ac-11e8-812a-9fe5ff84d727.PNG)
***

### 3. FORK한 저장소 최신화

```sh
$ git fetch 등록한 저장소 이름

$ git merge 등록한 저장소 이름/브랜치
```
![gitworkflow09](https://user-images.githubusercontent.com/43169339/48600040-9f897580-e9ad-11e8-80a6-02cb2fbcffc2.PNG)
***
***

Feature Branch Workflow
=======================

### 1. Branch 생성 후 Checkout

```sh
$ git branch 브랜치이름

$ git checkout 브랜치이름

$ git branch -d 브랜치이름 (로컬 브랜치 삭제)

$ git push origin :브랜치이름 (저장소 브랜치 삭제)
```
![gitflow01](https://user-images.githubusercontent.com/43169339/48683627-735e3680-ebf1-11e8-9261-1f823c6bd15d.PNG)
***

### 2. Push

- 생성한 브랜치를 중앙저장소에 푸시하는 명령어. (--set-upstream : -u), 한번 연결 후 git push만 입력해도 됨.
```sh
$ git push -u 저장소이름 브랜치이름

$ git push
```
![gitflow02](https://user-images.githubusercontent.com/43169339/48686722-d4d9d180-ec00-11e8-88fe-aa35496af6dd.PNG)
***

### 3. Pull requests 및 Merge

- Pull requests 후 병합하기로 결정이 나면 작업 진행(권한이 있는 누구든 병합 가능)
```sh
$ git checkout master

$ git fetch 저장소이름 브랜치이름

$ git merge 저장소이름/브랜치이름

$ git push 저장소이름 master
```
![gitflow03](https://user-images.githubusercontent.com/43169339/48687097-cee4f000-ec02-11e8-92c7-31afa463274e.PNG)
***


***
***
| 명령어   | 설명                                              |
| -------- | ------------------------------------------------- |
| clone    | 저장소를 로컬 폴더에 복사                         |
| remote   | 원격 저장소 추가                                  |
| init     | 저장소 초기화                                     |
| add      | 인덱스에 파일 상태 기록                           |
| log      | 커밋 이력 조회                                    |
| status   | 작업 트리 상태 표시                               |
| branch   | 분기, 나열, 작성                                  |
| checkout | 분기를 전환하거나 작업 트리 파일 복원             |
| commit   | 저장소 변경 사항을 기록                           |
| diff     | 스테이징 영역과 현재 작업트리의 차이점            |
| merge    | 병합                                              |
| rebase   | ????                                              |
| fetch    | 원격 저장소의 커밋 이력을 가져와 로컬 브랜치 갱신 |
| pull     | 이력 및 병합                                      |
| push     | 원격 저장소에 푸쉬                                |
|          |                                                   |
|          |                                                   |
|          |                                                   |
|          |                                                   |
|          |                                                   |



### 참고사이트
- Git을 이용한 협업 워크플로우 (https://lhy.kr/git-workflow)
- Fork를 이용한 깃 협업플로우 (http://playinlion.tistory.com/29)
- GitHub로 협업하는 방법 - Gitflow Workflow (https://gmlwjd9405.github.io/2018/05/12/how-to-collaborate-on-GitHub-3.html)
- 우린 Git-flow를 사용하고 있어요 - 우아한 형제들 (http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html) 
- Git 명령어 정리 (https://blog.outsider.ne.kr/572)
