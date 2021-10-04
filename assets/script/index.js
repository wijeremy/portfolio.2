const cardHolder = document.getElementById('card-holder');
const db = './assets/script/cards.json';
fetch(db)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const myElements = data
      .map((i) => {
        const { id, name, github, action, img, gif } = i;
        const desc =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus sem, finibus ac nisl at, tristique accumsan ligula. Cras commodo convallis tellus efficitur rutrum. Vivamus iaculis diam nec euismod lacinia.';
        return `<div class="col">
        <div class="card shadow-sm" id=${id}>
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="${name}"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            src="${img}"
          >
            <title>${name}</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
          </img>

          <div class="card-body">
            <h2 class="card-text">
                ${name}
            </h2/>
            <p class="card-text">
              ${desc}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a
                  role="button"
                  class="btn btn-sm btn-outline-secondary"
                  href="${github}"
                >
                  See it in GitHub
                </a>
                <a
                  role="button"
                  class="btn btn-sm btn-outline-secondary"
                  href="${action}"
                >
                  See it in action!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      })
      .join('\n');
    cardHolder.innerHTML = myElements;
  })
  .catch((err) => console.error(err));
