# :egg: Egg-Onion Project


SKT NUGU 음성인식 스피커와 Back-end 서버를 연동시킨 프로젝트입니다. NUGU 스피커에게 식재료를 말하면 적절한 레시피 응답합니다.


#  👨‍👩‍👧‍👦 Contribution

## VUX 기획

김지현

하영은

## 서버

박상윤 [(syunyun)](https://github.com/syunyun)

임동준 [(DongjunLim)](https://github.com/DongjunLim)



# :orange_book: terminology

 | 영문명 | 설명  |
 | --- | --- |
| Intent | 사용자의 발화 의도 |
| Entity| 사용자의 Intent에서 처리하기 원하는 개체 |
| Action | Intent에 적절한 응답 |
| Receipe | 사용자가 원하는 레시피 |
| Ingredient | 사용자가 발화하는 레시피 |




# :computer: Server Engironment

TODO


# :computer: Service Architecture


![image.png](https://images.velog.io/post-images/pa324/ab04f1b0-3cd5-11ea-b5cc-1d04056e8231/image.png)


### How to work egg-onion service?

&nbsp; `계란파 켜주십시오`라는 사용자 Intent에 의해`answer.start.service`액션이 실행되면서  egg-onion 서비스가 시작이 됩니다. 계란파 서비스가 시작되면 사용자는 자신이 가지고 있는 재료를 NUGU에게 말할 수 있습니다.


`김치,파,계란  있네요`라는 사용자 Intent에 의해 `answer.input_ingredient`액션이 실행되고  NLU처리기를 통과하면서 원하는 `Entity`로 추출 됩니다. 추출된 `Entity`들은 `Utterance Parameter`가 되고 이를 Back-end Proxy Server로 전송합니다.

`Back-end Proxy Server`에서는 요청으로 받은 식재료를 이용해서 레시피를 필터링하고 최종적으로 NUGU 에게 응답합니다.


## NUGU Play Builder 

NUGU Play Builder의 play구조는 아래와 같습니다.

~~~
answer.start.service  : 서비스 시작 액션
answer.input_ingredient : 재료 입력하는 액션
ask.another.menu : 다른 레시피 찾아주는 레시피
ask.moremore.menu : 또 다른 레시피 찾아주는 레시피
finish.conversation : NUGU와 대화 종료
~~~

![image.png](https://images.velog.io/post-images/pa324/59bfe7f0-48de-11ea-ab15-a1fea545fd23/image.png)





## Backend 

&nbsp; Backend Proxy Server의 구조는 아래와 같습니다. NuguService가 User인스턴스를 생성해서 getReceipe메서드를 호출하면서 비즈니스 로직이 실행됩니다. User인스턴스는 Receipe와 Ingredient 클래스와의 협력을 통해서 적절한 레시피를 찾아내고 이를 응답합니다.

![image.png](https://images.velog.io/post-images/pa324/63b87330-48e3-11ea-919c-679b6a358c45/image.png)






# Improvements

TODO
