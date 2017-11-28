function CreateEditLinks() {
  chrome.tabs.executeScript({
    file: 'CreateEditLinks.js'
  });
}

function ClearEditLinks() {
  chrome.tabs.executeScript({
    code: "$('.editLink').each(function(){$(this).remove();});"
  });
}

document.getElementById('CreateEditLinks').addEventListener('click', CreateEditLinks);
document.getElementById('ClearEditLinks').addEventListener('click', ClearEditLinks);