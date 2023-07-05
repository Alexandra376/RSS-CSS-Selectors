///Часть кода 1 - отвечает за смену столов и загаловков при клике на Level 1 и т.д.

const menuItems = document.querySelectorAll('.menu-right h1');
const table = document.querySelector('.table') as HTMLTableElement;
const tableWrapper = document.querySelector('.table-wrapper') as HTMLTableElement;
const windowModal = document.querySelector('.window') as HTMLElement;
const inputWindow = document.querySelector('.input-window__markup') as HTMLElement;
const input = document.querySelector('.input-window__strobe') as HTMLInputElement;
const editor = document.querySelector('.editor') as HTMLInputElement;
const button = document.querySelector('.button-help') as HTMLButtonElement;
input.id = 'text';

// const inputWindow = document.querySelector('.input-window__murkup') as HTMLElement;
const figures: HTMLElement[] = [];

//Создание стола по умолчанию
tableWrapper.id = "size";
const plateOne = document.createElement('plate');
plateOne.className = "table__strobe";
table.appendChild(plateOne);
figures.push(plateOne);

const plateTwo = document.createElement('plate');
plateTwo.className = "table__strobe";
table.appendChild(plateTwo);
figures.push(plateTwo);

const markup = "<div class=\"table\">\n<plate />\n<plate />\n</div>";
inputWindow.innerText = '';
inputWindow.innerText = markup;

function handleClick(event: Event) {
  const selectionText = document.querySelector('.selection__order') as HTMLElement;
  const text = (event.target as HTMLElement).getAttribute('data-text');

  console.log(event)

  if (text) {
    selectionText.textContent = text;
  }

  figures.forEach((figure) => {
    if (table.contains(figure)) {
      table.removeChild(figure);
    }
  });
  figures.length = 0;

  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'one') {
      tableWrapper.id = "size";
      const plateOne = document.createElement('plate');
      plateOne.className = "table__strobe";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const plateTwo = document.createElement('plate');
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const markup = "<div class=\"table\">\n<plate />\n<plate />\n</div>";
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода 
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'two') {
      tableWrapper.id = "size-one";
      const bentoOne = document.createElement('bento');
      bentoOne.classList.add('strobe');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const plateTwo = document.createElement('plate');
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const bentoTwo = document.createElement('bento');
      bentoTwo.classList.add('strobe');
      table.appendChild(bentoTwo);
      figures.push(bentoTwo);

      const markup = `<div class="table"> \n <bento /> \n <plate /> \n <bento /> \n </div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'three') {
      tableWrapper.id = "size-one";
      const plateOne = document.createElement('plate');
      plateOne.className = "strobe";
      plateOne.id = "fancy";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const plateTwo = document.createElement('plate');
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const bentoTwo = document.createElement('bento');
      table.appendChild(bentoTwo);
      figures.push(bentoTwo);

      const markup = `<div class="table"> \n<plate id="fancy" /> \n<plate /> \n<bento /> \n</div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'four') {
      tableWrapper.id = "size-one";
      const bentoOne = document.createElement('bento');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const plateOne = document.createElement('plate');
      table.appendChild(plateOne);
      figures.push(plateOne);

      const apple = document.createElement('apple');
      apple.className = "strobe";
      apple.style.width="46px";
      plateOne.appendChild(apple);
      figures.push(apple);

      const appleTwo = document.createElement('apple');
      appleTwo.style.width="46px";
      table.appendChild(appleTwo);
      figures.push(appleTwo);

      const markup = `<div class="table"> \n<bento" /> \n<plate> \n<apple /> \n</plate> \n<apple /> \n</div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'five') {
      tableWrapper.id = "size-one";
      const bentoOne = document.createElement('bento');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const orange = document.createElement('orange');
      orange.style.width="60px";
      bentoOne.appendChild(orange);
      figures.push(bentoOne);

      const plateOne = document.createElement('plate');
      plateOne.id = "fancy";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const pickle = document.createElement('pickle');
      plateOne.appendChild(pickle);
      figures.push(pickle);

      const plateTwo = document.createElement('plate');
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const pickleTwo = document.createElement('pickle');
      plateTwo.appendChild(pickleTwo);
      figures.push(pickleTwo);

      const markup = `<div class="table"> \n<bento> \n<orange /> \n</bento> \n<plate id="fancy" /> \n<pickle /> \n</plate> \n <plate> \n<pickle /> \n<plate /> \n</div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'six') {
      tableWrapper.id = "size-six";
      const appleTwo = document.createElement('apple');
      appleTwo.style.width="47px";
      table.appendChild(appleTwo);
      figures.push(appleTwo);

      const appleSmall = document.createElement('apple');
      appleSmall.style.width="30px";
      appleSmall.className = "small strobe";
      table.appendChild(appleSmall);
      figures.push(appleSmall);

      const plateOne = document.createElement('plate');
      table.appendChild(plateOne);
      figures.push(plateOne);

      const apple = document.createElement('apple');
      apple.style.width="30px";
      apple.className = "small strobe";
      plateOne.appendChild(apple);
      figures.push(apple);

      const plateTwo = document.createElement('plate');
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const markup = `<div class="table"> \n <apple" /> \n <apple class="small" /> \n <plate> \n <apple class="small" /> \n </plate> \n <plate /> \n </div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'seven') {
      tableWrapper.id = "size-seven";
      const appleTwo = document.createElement('apple');
      appleTwo.style.width="47px";
      table.appendChild(appleTwo);
      figures.push(appleTwo);

      const appleSmall = document.createElement('apple');
      appleSmall.style.width="30px";
      appleSmall.className = "small";
      table.appendChild(appleSmall);
      figures.push(appleSmall);

      const bentoOne = document.createElement('bento');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const orange = document.createElement('orange');
      orange.style.width="30px";
      orange.className = "small strobe";
      bentoOne.appendChild(orange);
      figures.push(orange);

      const plateOne = document.createElement('plate');
      table.appendChild(plateOne);
      figures.push(plateOne);

      const orangeTwo = document.createElement('orange');
      orangeTwo.style.width="60px";
      plateOne.appendChild(orangeTwo);
      figures.push(orangeTwo);

      const plateTwo = document.createElement('plate');
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const orangeThree = document.createElement('orange');
      orangeThree.style.width="30px";
      orangeThree.className = "small strobe";
      plateTwo.appendChild(orangeThree);
      figures.push(orangeThree);

      const markup = `<div class="table"> \n <apple /> \n <apple class="small" /> \n <bento> \n <orange class="small" /> \n <plate> \n <orange /> \n </plate> \n <plate> \n <orange class="small" /> \n </plate> \n </div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'eight') {
      tableWrapper.id = "size-eight";
      const bentoOne = document.createElement('bento');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const orange = document.createElement('orange');
      orange.style.width="60px";
      bentoOne.appendChild(orange);
      figures.push(bentoOne);

      const orangeThree = document.createElement('orange');
      orangeThree.style.width="30px";
      orangeThree.className = "small";
      table.appendChild(orangeThree);
      figures.push(orangeThree);

      const bentoTwo = document.createElement('bento');
      table.appendChild(bentoTwo);
      figures.push(bentoTwo);

      const orangeTwo = document.createElement('orange');
      orangeTwo.style.width="30px";
      orangeTwo.className = "small strobe";
      bentoTwo.appendChild(orangeTwo);
      figures.push(orangeTwo);

      const bentoThree = document.createElement('bento');
      table.appendChild(bentoThree);
      figures.push(bentoThree);

      const appleSmall = document.createElement('apple');
      appleSmall.style.width="30px";
      appleSmall.className = "small";
      bentoThree.appendChild(appleSmall);
      figures.push(appleSmall);

      const bentoFive = document.createElement('bento');
      table.appendChild(bentoFive);
      figures.push(bentoFive);

      const orangeFour = document.createElement('orange');
      orangeFour.style.width="30px";
      orangeFour.className = "small strobe";
      bentoFive.appendChild(orangeFour);
      figures.push(orangeFour);

      const markup = `<div class="table"> \n <bento> \n <orange /> \n </bento> \n <orange class="small" /> \n <bento> \n <orange class="small" /> \n </bento> \n <bento> \n <orange class="small" /> \n </bento> \n </div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'nine') {
      tableWrapper.id = "size-nine";
      const pickle = document.createElement('pickle');
      pickle.style.width="18px";
      table.appendChild(pickle);
      figures.push(pickle);

      const plateOne = document.createElement('plate');
      plateOne.className = "table__strobe";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const pickleOne = document.createElement('pickle');
      pickleOne.style.width="18px";
      pickleOne.className = "strobe";
      plateOne.appendChild(pickleOne);
      figures.push(pickleOne);

      const bentoOne = document.createElement('bento');
      bentoOne.classList.add('strobe');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const pickleFive = document.createElement('pickle');
      pickleFive.style.width="18px";
      pickleFive.className = "strobe";
      bentoOne.appendChild(pickleFive);
      figures.push(pickle);

      const plateTwo = document.createElement('plate');
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const pickleTwo = document.createElement('pickle');
      pickleTwo.style.width="18px";
      pickleTwo.className = "strobe";
      plateTwo.appendChild(pickleTwo);
      figures.push(pickleTwo);

      const pickleThree = document.createElement('pickle');
      pickleThree.style.width="18px";
      table.appendChild(pickleThree);
      figures.push(pickleThree);

      const markup = `<div class="table"> \n <pickle class="small" /> \n <pickle /> \n <plate> \n <pickle /> \n </plate> \n <bento> \n <pickle /> \n </bento> \n <plate> \n <pickle /> \n </plate> \n <pickle /> \n <pickle class="small" /> \n </div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'ten') {
      tableWrapper.id = "size-ten";
      const appleTwo = document.createElement('apple');
      appleTwo.className = "strobe color";
      appleTwo.style.width="47px";
      table.appendChild(appleTwo);
      figures.push(appleTwo);

      const plateTwo = document.createElement('plate');
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const orangeThree = document.createElement('orange');
      orangeThree.style.width="30px";
      orangeThree.className = "small strobe";
      plateTwo.appendChild(orangeThree);
      figures.push(orangeThree);

      const bentoOne = document.createElement('bento');
      bentoOne.classList.add('strobe');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const bentoTwo = document.createElement('bento');
      bentoTwo.classList.add('strobe');
      table.appendChild(bentoTwo);
      figures.push(bentoTwo);

      const orange = document.createElement('orange');
      orange.style.width="60px";
      bentoTwo.appendChild(orange);
      figures.push(bentoOne);

      const plateOne = document.createElement('plate');
      plateOne.className = "strobe";
      plateOne.id = "fancy";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const markup = `<div class="table"> \n <apple /> \n <plate> \n <orange class="small" /> \n </plate>\n  <bento /> \n <bento> \n <orange /> \n </bento> \n <plate id="fancy" /> \n </div>`;
      inputWindow.innerText = '';
      inputWindow.innerText = markup;

      return; //Прерывает выполнение кода        
    }     
  };
}

menuItems.forEach(function(item) {
  item.addEventListener('click', handleClick);
});

//Часть кода 2 - отвечает за создание подсказок над элементами 

const tableStrobe = document.querySelectorAll('.table') as NodeListOf<HTMLElement>;
const tableWindow = document.querySelector(".window") as HTMLElement;

tableStrobe.forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    const targetElement = e.target as HTMLElement | null;
    if (targetElement && targetElement.tagName !== "DIV") {
      if (targetElement.tagName === "PLATE") {
        tableWindow.textContent = "<plate></plate>";
      }
      if (targetElement.tagName === "BENTO") {
        tableWindow.textContent = "<bento></bento>";
      }
      if (targetElement.tagName === "APPLE") {
        tableWindow.textContent = "<apple></apple>";
      }
      if (targetElement.id === "fancy") {
        tableWindow.textContent = `<plate id="fancy"></plate>`;
      }
      if (targetElement.tagName === "ORANGE") {
        tableWindow.textContent = "<orange></orange>";
      }
      if (targetElement.tagName === "PICKLE") {
        tableWindow.textContent = "<pickle></pickle>";
      }
      if (targetElement.tagName === "APPLE" && targetElement.className === "small strobe") {
        tableWindow.textContent = `<apple class="small"></apple>`;
      }
      if (targetElement.tagName === "ORANGE" && targetElement.className === "small strobe") {
        tableWindow.textContent = `<orange class="small"></orange>`;
      }
    }
  });
  element.addEventListener('mouseout', (e) => {
    const targetElement = e.target as HTMLElement | null;
    if (targetElement) {
      tableWindow.textContent = "";
    }
  });
});

const targetElementOne = document.getElementById('one');
const targetElementTwo = document.getElementById('two');
const targetElementThree = document.getElementById('three');
const targetElementFour = document.getElementById('four');
const targetElementFive = document.getElementById('five');
const targetElementSix = document.getElementById('six');
const targetElementSeven = document.getElementById('seven');
const targetElementEight = document.getElementById('eight');
const targetElementNine = document.getElementById('nine');
const targetElementTen = document.getElementById('ten');

input.addEventListener('keydown', function(event) {
  if (event.target instanceof HTMLElement && event.target.id === 'text' && event.key === 'Enter') {
    const inputValue = input.value.toLowerCase();
    let customEvent;
    let targetElement;

    if (inputValue === 'plate') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementTwo;
    } else if (inputValue === 'bento') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementThree;
    } else if (inputValue === '#fancy') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementFour;
    } else if (inputValue === 'plate apple') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementFive;
    } else if (inputValue === '#fancy pickle') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementSix;
    } else if (inputValue === '.small') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementSeven;
    } else if (inputValue === 'orange.small') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementEight;
    } else if (inputValue === 'bento orange.small') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementNine;
    } else if (inputValue === 'bento, plate') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementTen;
    } else if (inputValue === '*') {
      customEvent = new PointerEvent('click');
      targetElement = targetElementOne;
    } else {
      editor.classList.add('shake');
      setTimeout(() => {
        editor.classList.remove('shake');
      }, 500);
      return;
    }

    Object.defineProperty(customEvent, 'target', { value: targetElement });
    handleClick(customEvent);
    input.value = '';
  }
});


// Код отвечает за подсветку выбранного уровня

const elements = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function handleClickElem(event: MouseEvent) {
  elements.forEach((id) => {
    const element = document.getElementById(id) as HTMLElement;
    element.classList.remove('selected');
  });

  const clickedElement = event.currentTarget as HTMLElement;
  clickedElement.classList.add('selected');
}

elements.forEach((id) => {
  const element = document.getElementById(id) as HTMLElement;
  element.addEventListener('click', handleClickElem);
});



