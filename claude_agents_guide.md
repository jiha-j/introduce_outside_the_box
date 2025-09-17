# Claude Code Agents 완전 가이드

## 개요

Claude Code의 Agent 시스템은 복잡한 작업을 전문화된 AI 에이전트에게 위임할 수 있는 강력한 기능입니다. 각 Agent는 특정 도메인에 최적화되어 있으며, 자율적으로 작업을 수행합니다.

## Agent 시스템 아키텍처

### 기본 구조
- **Task 도구**: Agent 실행을 위한 진입점
- **전문화된 타입**: 17개의 사전 정의된 Agent 타입
- **자율 실행**: 독립적인 작업 수행 능력
- **도구 접근**: 각 Agent별 특화된 도구 세트

### 실행 모델
```
사용자 요청 → Task 도구 → Agent 선택 → 자율 실행 → 결과 반환
```

## Agent 타입별 상세 가이드

### 1. general-purpose
- **용도**: 복잡한 질문 연구, 코드 검색, 다단계 작업
- **도구**: 모든 도구 (*)
- **사용 시기**: 키워드/파일 검색에서 첫 시도에 정확한 매치를 찾기 어려울 때

### 2. statusline-setup
- **용도**: Claude Code 상태표시줄 설정
- **도구**: Read, Edit
- **사용 시기**: IDE 상태표시줄 구성 필요시

### 3. output-style-setup
- **용도**: Claude Code 출력 스타일 생성
- **도구**: Read, Write, Edit, Glob, Grep
- **사용 시기**: 출력 형식 커스터마이징 필요시

### 4. technical-writer
- **용도**: 명확하고 포괄적인 기술 문서 작성
- **도구**: 모든 도구 (*)
- **사용 시기**: 사용성과 접근성에 중점을 둔 문서 필요시

### 5. system-architect
- **용도**: 확장 가능한 시스템 아키텍처 설계
- **도구**: 모든 도구 (*)
- **사용 시기**: 장기적 기술 결정과 유지보수성 중심 설계 필요시

### 6. socratic-mentor
- **용도**: 소크라테스식 교육 방법론을 통한 프로그래밍 지식 전달
- **도구**: 모든 도구 (*)
- **사용 시기**: 전략적 질문을 통한 발견 학습 필요시

### 7. security-engineer
- **용도**: 보안 취약점 식별 및 보안 표준 준수
- **도구**: 모든 도구 (*)
- **사용 시기**: 보안 분석, 탐지 규칙, 방어 도구 개발 필요시

### 8. root-cause-analyst
- **용도**: 복잡한 문제의 근본 원인 체계적 조사
- **도구**: 모든 도구 (*)
- **사용 시기**: 증거 기반 분석과 가설 검증이 필요한 문제 해결시

### 9. requirements-analyst
- **용도**: 모호한 프로젝트 아이디어를 구체적 명세로 변환
- **도구**: 모든 도구 (*)
- **사용 시기**: 체계적 요구사항 발견과 구조화된 분석 필요시

### 10. refactoring-expert
- **용도**: 체계적 리팩토링을 통한 코드 품질 개선
- **도구**: 모든 도구 (*)
- **사용 시기**: 기술 부채 감소와 클린 코드 원칙 적용 필요시

### 11. quality-engineer
- **용도**: 포괄적 테스팅 전략을 통한 소프트웨어 품질 보장
- **도구**: 모든 도구 (*)
- **사용 시기**: 체계적 엣지 케이스 탐지와 품질 검증 필요시

### 12. python-expert
- **용도**: SOLID 원칙과 모던 베스트 프랙티스를 따르는 프로덕션급 Python 코드
- **도구**: 모든 도구 (*)
- **사용 시기**: 보안, 고성능 Python 애플리케이션 개발 필요시

### 13. performance-engineer
- **용도**: 측정 기반 분석을 통한 시스템 성능 최적화
- **도구**: 모든 도구 (*)
- **사용 시기**: 병목 지점 제거와 성능 튜닝 필요시

### 14. learning-guide
- **용도**: 점진적 학습과 실용적 예제를 통한 프로그래밍 개념 교육
- **도구**: 모든 도구 (*)
- **사용 시기**: 이해 중심의 코드 설명과 교육 필요시

### 15. frontend-architect
- **용도**: 사용자 경험과 모던 프레임워크에 중점을 둔 접근 가능한 고성능 UI
- **도구**: 모든 도구 (*)
- **사용 시기**: 프론트엔드 아키텍처 설계와 UI/UX 최적화 필요시

### 16. devops-architect
- **용도**: 신뢰성과 관찰 가능성에 중점을 둔 인프라 자동화
- **도구**: 모든 도구 (*)
- **사용 시기**: 배포 프로세스 자동화와 인프라 관리 필요시

### 17. backend-architect
- **용도**: 데이터 무결성, 보안, 장애 허용성에 중점을 둔 신뢰할 수 있는 백엔드 시스템
- **도구**: 모든 도구 (*)
- **사용 시기**: 확장 가능한 백엔드 시스템 설계 필요시

## Agent 사용 방법

### 기본 사용법
```python
# Task 도구를 사용한 Agent 호출
Task(
    subagent_type="python-expert",
    description="API 엔드포인트 생성",
    prompt="FastAPI를 사용하여 사용자 인증을 위한 REST API 엔드포인트를 구현해주세요. JWT 토큰 기반 인증과 비밀번호 해싱을 포함해야 합니다."
)
```

### 병렬 실행
```python
# 여러 Agent를 동시에 실행
Task(subagent_type="security-engineer", description="보안 분석", prompt="..."),
Task(subagent_type="performance-engineer", description="성능 분석", prompt="...")
```

### 상세한 지시사항 작성 요령
```python
Task(
    subagent_type="system-architect",
    description="마이크로서비스 아키텍처 설계",
    prompt="""
    전자상거래 플랫폼을 위한 마이크로서비스 아키텍처를 설계해주세요.

    요구사항:
    - 사용자 관리, 상품 카탈로그, 주문 처리, 결제 서비스
    - 높은 가용성과 확장성 필요
    - 데이터 일관성과 트랜잭션 관리
    - API Gateway와 서비스 디스커버리 포함

    결과물:
    - 아키텍처 다이어그램 설명
    - 각 서비스의 책임과 인터페이스
    - 데이터베이스 설계 권장사항
    - 배포 및 모니터링 전략
    """
)
```

## Agent 사용 시기와 가이드라인

### Agent 사용이 권장되는 경우
- **복잡한 다단계 작업**: 3단계 이상의 작업이 필요한 경우
- **전문 지식 필요**: 특정 도메인의 깊은 전문성이 요구되는 경우
- **대용량 처리**: 많은 파일이나 복잡한 코드베이스 분석이 필요한 경우
- **품질 보장**: 높은 품질의 결과물이 중요한 경우

### Agent 사용을 피해야 하는 경우
- **단순한 작업**: 간단한 파일 읽기나 기본적인 편집
- **즉시성이 중요한 작업**: 빠른 응답이 필요한 경우
- **대화형 작업**: 사용자와의 지속적인 상호작용이 필요한 경우

## 모범 사례

### 1. 명확한 작업 정의
```python
# 좋은 예
Task(
    subagent_type="refactoring-expert",
    description="레거시 코드 리팩토링",
    prompt="user_service.py 파일의 UserManager 클래스를 SOLID 원칙에 따라 리팩토링하고, 단위 테스트를 추가해주세요."
)

# 나쁜 예
Task(
    subagent_type="refactoring-expert",
    description="코드 개선",
    prompt="코드를 좀 더 좋게 만들어주세요."
)
```

### 2. 적절한 Agent 선택
- **아키텍처 설계**: system-architect
- **보안 검토**: security-engineer
- **성능 최적화**: performance-engineer
- **코드 리팩토링**: refactoring-expert
- **테스트 전략**: quality-engineer

### 3. 결과물 명시
```python
Task(
    subagent_type="technical-writer",
    description="API 문서 작성",
    prompt="""
    REST API 문서를 작성해주세요.

    포함할 내용:
    - 엔드포인트 목록과 설명
    - 요청/응답 형식
    - 인증 방법
    - 에러 코드와 처리 방법
    - 예제 코드

    형식: OpenAPI 3.0 스펙
    """
)
```

## 주의사항과 제한사항

### 1. 상태 비저장
- 각 Agent 호출은 독립적
- 이전 대화나 컨텍스트를 기억하지 않음
- 필요한 모든 정보를 prompt에 포함해야 함

### 2. 단방향 통신
- Agent가 완료 후 추가 질문 불가
- 모든 요구사항을 초기 prompt에 명시해야 함

### 3. 실행 시간
- 복잡한 작업은 시간이 오래 걸릴 수 있음
- 타임아웃 가능성 고려

### 4. 오류 처리
- Agent 실행 실패 시 재시도 필요
- 오류 메시지 확인하여 문제점 파악

## 고급 사용 패턴

### 1. 파이프라인 구성
```python
# 1단계: 요구사항 분석
Task(subagent_type="requirements-analyst", ...)

# 2단계: 아키텍처 설계
Task(subagent_type="system-architect", ...)

# 3단계: 구현
Task(subagent_type="python-expert", ...)

# 4단계: 테스트
Task(subagent_type="quality-engineer", ...)
```

### 2. 검토 및 개선 사이클
```python
# 초기 구현
Task(subagent_type="python-expert", ...)

# 보안 검토
Task(subagent_type="security-engineer", ...)

# 성능 최적화
Task(subagent_type="performance-engineer", ...)

# 리팩토링
Task(subagent_type="refactoring-expert", ...)
```

## 결론

Claude Code의 Agent 시스템은 복잡한 소프트웨어 개발 작업을 효율적으로 처리할 수 있는 강력한 도구입니다. 적절한 Agent 선택과 명확한 지시사항을 통해 높은 품질의 결과물을 얻을 수 있습니다. 각 Agent의 전문성을 이해하고 올바르게 활용한다면 개발 생산성을 크게 향상시킬 수 있습니다.