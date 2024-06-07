const infos = {
  nome: 'ℌ𝔢𝔩𝔬𝔦𝔰𝔞 ℨ𝔢𝔫',
  hello: 'Hello, world!',
  imagem: 'https://github.com/heloisazen.png',
  github: 'https://github.com/heloisazen',
  linkedin: 'https://www.linkedin.com/in/heloisacrepaldizen/',
  instagram: 'https://www.instagram.com/helozenn/',
  bio: 'Farmacêutica-Bioquímica e estudante de Analise e Desenvolvimento de Sistemas pela Descomplica 👩🏻‍💻 </br> Atualmente em transição de carreira. Sempre fui uma grande entusiasta da tecnologia e de joguinhos eletrônicos 🎮',
}

document.getElementById('imagem').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('hello').innerHTML = infos.hello;
document.getElementById('bio').innerHTML = infos.bio;

document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
document.getElementById('instagram').href = infos.instagram;
