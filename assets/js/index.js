(function () {
  ("use strict");

  const propriedades_encerradas = [
    {
      id: 0,
      nome: "Sonho Dourado",
      tipo: "Condomínio",
      endereco: "Shopping Estrada",
      imagem: "assets/img/SONHODOURADO-entrada.jpg",
    },
    {
      id: 1,
      nome: "Athenas Park Residence",
      tipo: "Condomínio",
      endereco: "BOULEVARD SHOPPING CAMPOS",
      imagem: "assets/img/Jardim_Athenas/ATHENAS-entrada.jpg",
    },
    {
      id: 2,
      nome: "Pathernon Park Residence",
      tipo: "Condomínio",
      endereco: "Shopping Estrada",
      imagem: "assets/img/PATHERNO-entrada.jpg",
    },
  ];
  var encerradas = document.getElementById("encerradas");
  propriedades_encerradas.map((val) => {
    encerradas.innerHTML +=
      `

    <div class="carousel-item-c swiper-slide">
                    <div class="card-box-b card-shadow news-box">
                      <div class="img-box-b">
                        <img src="` +
      val.imagem +
      `" alt=""
                          class="img-b
                          img-fluid">
                      </div>
                      <div class="card-overlay">
                        <div class="card-header-b">
                          <div class="card-category-b">
                            <a class="category-b">Condomínio</a>
                          </div>
                          <div class="card-title-b">
                            <h2 class="title-2">
                              <a>` +
      val.nome +
      `
                              </a>
                            </h2>
                          </div>
                          <div class="card-date">
                            <span class="date-b">` +
      val.endereco +
      `</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    `;
  });
})();
