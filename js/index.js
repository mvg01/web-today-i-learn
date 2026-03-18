const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 새로고침 방지

  // 입력값 가져오기
  const dateValue = document.querySelector("#til-date").value;
  const titleValue = document.querySelector("#til-title").value;
  const contentValue = document.querySelector("#til-content").value;

  // 새로운 요소 생성
  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");

  const newTime = document.createElement("time");
  newTime.textContent = dateValue;

  const newH3 = document.createElement("h3");
  newH3.textContent = titleValue;

  const newP = document.createElement("p");
  newP.textContent = contentValue;

  // 요소 조립
  newArticle.appendChild(newTime);
  newArticle.appendChild(newH3);
  newArticle.appendChild(newP);

  // 목록 최상단에 추가
  tilList.prepend(newArticle);

  // 폼 초기화
  tilForm.reset();
});

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.gallery-item img');

// 갤러리 이미지 클릭 시 모달 열기
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src; // 클릭한 이미지 경로 전달
    modal.classList.add('active'); // 모달 보이기
  });
});

// X 버튼 클릭 시 닫기
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// 어두운 배경 클릭 시 닫기
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});