const projects = {
    slime: {
        key: "slime",
        title: "Slime Defense",
        status: "진행 중",
        period: "2026년 3월 ~ 현재",
        role: "기획 · 프로그래밍 · 시스템 구현",
        genre: "웨이브 디펜스 / 성장형 액션",
        summary: "대량의 적을 상대로 생존하며 점진적으로 화력을 확장하는 구조를 목표로 한 디펜스 프로젝트입니다.",
        intro: "플레이어가 직접 전투 흐름을 통제하면서도 지나치게 복잡하지 않은 성장 루프를 만드는 것을 목표로 진행한 프로젝트입니다. 전투 중 선택과 강화가 분명하게 체감되도록 설계하는 데 집중했습니다.",
        points: [
            "웨이브 진행 구조와 레벨업 설계",
            "무기 성장 밸런스 조정",
            "전투 UI 피드백 개선"
        ],
        stack: [
            "Unity",
            "C#",
            "Gameplay",
            "Combat System"
        ],
        result: "코어 전투 루프를 중심으로 반복 플레이가 가능한 프로토타입을 구축했고, 현재도 개선 중입니다."
    },

    monster: {
        key: "monster",
        title: "Monster World",
        status: "완료",
        period: "2025년 1월 ~ 2025년 3월",
        role: "기획 · 프로그래밍 · 월드 구성",
        genre: "어드벤처 / 전투 탐험",
        summary: "탐험과 전투를 중심으로 지역을 이동하며 성장하는 구조를 구현한 프로젝트입니다.",
        intro: "맵 이동과 전투, 탐험 보상을 하나의 흐름으로 연결하는 데 집중했습니다. 구역별 플레이 감각이 달라지도록 구성하고, 플레이어가 이동하면서 자연스럽게 콘텐츠를 경험하도록 만들었습니다.",
        points: [
            "구역별 동선과 탐험 구조 설계",
            "기초 전투 및 상호작용 시스템 구현",
            "콘텐츠 배치와 흐름 조정"
        ],
        stack: [
            "Unity",
            "C#",
            "Level Design",
            "Interaction"
        ],
        result: "프로젝트를 완성까지 마무리하며 탐험형 구조와 기본 전투 흐름 구현 경험을 확보했습니다."
    },

    ui: {
        key: "ui",
        title: "UI Project",
        status: "완료",
        period: "3일",
        role: "UI 구성 · 인터랙션 구현",
        genre: "UI 프로토타이핑",
        summary: "짧은 기간 안에 핵심 인터페이스를 설계하고 구현하는 데 집중한 UI 중심 프로젝트입니다.",
        intro: "짧은 제작 기간 안에서도 정보 전달, 버튼 반응, 화면 전환 흐름이 자연스럽게 느껴지도록 설계했습니다. 기능보다 사용자 경험과 화면 구조 정리를 우선했습니다.",
        points: [
            "짧은 기간 내 UI 화면 구성",
            "버튼 반응과 상태 표현 구현",
            "정보 우선순위와 화면 흐름 정리"
        ],
        stack: [
            "Unity UI",
            "C#",
            "UX Flow",
            "Layout"
        ],
        result: "짧은 일정에서도 완결성 있는 UI 흐름을 구성하는 연습이 되었고, 이후 프로젝트의 UI 기준을 정리하는 데 도움이 됐습니다."
    },

    ad: {
        key: "ad",
        title: "AD Project",
        status: "완료",
        period: "5일",
        role: "프로토타입 제작 · 시스템 연결",
        genre: "캐주얼 프로토타입",
        summary: "짧은 플레이 안에 핵심 재미를 전달하는 구조를 가정하고 제작한 프로토타입입니다.",
        intro: "즉시 이해 가능한 규칙과 빠른 반응성을 우선한 프로젝트입니다. 짧은 플레이 세션 안에서도 핵심 재미를 전달할 수 있도록 구조를 단순화하고, 반복 플레이를 유도하는 흐름을 구성했습니다.",
        points: [
            "짧은 세션용 코어 루프 구성",
            "즉각적인 피드백 템포 조정",
            "핵심 재미 중심 프로토타입 압축"
        ],
        stack: [
            "Unity",
            "C#",
            "Prototype",
            "Casual Design"
        ],
        result: "제한된 시간 안에 무엇을 먼저 완성해야 하는지 우선순위를 정하는 감각을 익힐 수 있었습니다."
    }
};

function createProjectCards() {
    const projectList = document.getElementById("projectList");
    const keys = Object.keys(projects);

    let html = "";

    for (let i = 0; i < keys.length; i++) {
        const project = projects[keys[i]];

        html +=
            `<button class="project-item" data-key="${project.key}">
                <div class="project-item-title">${project.title}</div>
                <div class="project-item-meta">${project.period}</div>
                <div class="project-item-desc">${project.summary}</div>
            </button>`;
    }

    projectList.innerHTML = html;
}

function renderListState(activeKey) {
    const buttons = document.querySelectorAll(".project-item");

    for (let i = 0; i < buttons.length; i++) {
        const key = buttons[i].getAttribute("data-key");

        if (key === activeKey) {
            buttons[i].classList.add("active");
        } else {
            buttons[i].classList.remove("active");
        }
    }
}

function renderStack(items) {
    let html = "";

    for (let i = 0; i < items.length; i++) {
        html += `<span class="meta-pill">${items[i]}</span>`;
    }

    return html;
}

function renderPoints(items) {
    let html = "";

    for (let i = 0; i < items.length; i++) {
        html += `<li>${items[i]}</li>`;
    }

    return html;
}

function showProject(key) {
    const project = projects[key];
    const projectDetail = document.getElementById("projectDetail");

    if (project === undefined || projectDetail === null) {
        return;
    }

    renderListState(key);

    projectDetail.innerHTML =
        `<div class="project-badge">${project.status}</div>
        <h3>${project.title}</h3>
        <div class="detail-meta">
            <span class="meta-pill">개발기간 · ${project.period}</span>
            <span class="meta-pill">역할 · ${project.role}</span>
            <span class="meta-pill">장르 · ${project.genre}</span>
        </div>
        <p class="section-desc" style="margin: 0; color: #cbd5e1;">${project.intro}</p>
        <div class="detail-grid">
            <div class="detail-box">
                <h4>프로젝트 소개</h4>
                <p>${project.summary}</p>
            </div>
            <div class="detail-box">
                <h4>주요 작업</h4>
                <ul>${renderPoints(project.points)}</ul>
            </div>
            <div class="detail-box">
                <h4>사용 기술 / 키워드</h4>
                <div class="detail-meta" style="margin-bottom: 0; margin-top: 14px;">
                    ${renderStack(project.stack)}
                </div>
            </div>
            <div class="detail-box">
                <h4>성과 및 회고</h4>
                <p>${project.result}</p>
            </div>
        </div>`;
}

function bindEvents() {
    const projectList = document.getElementById("projectList");

    if (projectList !== null) {
        projectList.addEventListener("click", function (event) {
            const button = event.target.closest(".project-item");

            if (button === null) {
                return;
            }

            const key = button.getAttribute("data-key");

            if (key !== null) {
                showProject(key);
            }
        });
    }
}

function initializePage() {
    createProjectCards();
    bindEvents();
    showProject("slime");
}

document.addEventListener("DOMContentLoaded", initializePage);
