function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function openLinkInNewTab(url) {
    window.open(url, '_blank');
}

document.getElementById("resume-link-1").addEventListener('click',()=>{
  window.open("https://drive.google.com/file/d/1SCsmvP1Y5w8dMe4U14U_5w-R8uglVj85/view?usp=drive_link")
})

document.getElementById("resume-link").addEventListener('click',()=>{
  window.open("https://drive.google.com/file/d/1SCsmvP1Y5w8dMe4U14U_5w-R8uglVj85/view?usp=drive_link")
})

document.getElementById("resume-button-2").addEventListener('click',()=>{
  var link = document.createElement('a');
  link.href = './assets/mohd-khalid-resume.pdf';
  link.target = '_blank';
  link.download = 'mohd-khalid-resume.pdf';
  link.click();
  window.open("https://drive.google.com/file/d/1SCsmvP1Y5w8dMe4U14U_5w-R8uglVj85/view?usp=drive_link")
})
document.getElementById("resume-button").addEventListener('click',()=>{
  var link = document.createElement('a');
  link.href = './assets/mohd-khalid-resume.pdf';
  link.target = '_blank';
  link.download = 'mohd-khalid-resume.pdf';
  link.click();
  window.open("https://drive.google.com/file/d/1SCsmvP1Y5w8dMe4U14U_5w-R8uglVj85/view?usp=drive_link")
})
document.getElementById("resume-button-1").addEventListener('click',()=>{
  var link = document.createElement('a');
  link.href = './assets/mohd-khalid-resume.pdf';
  link.target = '_blank';
  link.download = 'mohd-khalid-resume.pdf';
  link.click();
  window.open("https://drive.google.com/file/d/1SCsmvP1Y5w8dMe4U14U_5w-R8uglVj85/view?usp=drive_link")
})

