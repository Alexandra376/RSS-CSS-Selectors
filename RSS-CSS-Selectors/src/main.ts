//Часть кода 1 - отвечает за смену столов и загаловков при клике на Level 1 и т.д.

const menuItems = document.querySelectorAll('.menu-right h1');
const table = document.querySelector('.table') as HTMLTableElement;
const tableWrapper = document.querySelector('.table-wrapper') as HTMLTableElement;
const windowModal = document.querySelector('.window') as HTMLElement;
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

function handleClick(event: Event) {
  const selectionText = document.querySelector('.selection__order') as HTMLElement;
  const text = (event.target as HTMLElement).getAttribute('data-text');

  const one = document.getElementById('one');
  const two = document.getElementById('two');
  const three = document.getElementById('three');
  const four = document.getElementById('four');
  const five = document.getElementById('five');
  const six = document.getElementById('six');
  const seven = document.getElementById('seven');
  const eight = document.getElementById('eight');
  const nine = document.getElementById('nine');
  const ten = document.getElementById('ten');

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
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const bentoTwo = document.createElement('bento');
      bentoTwo.classList.add('strobe');
      table.appendChild(bentoTwo);
      figures.push(bentoTwo);

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
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const bentoTwo = document.createElement('bento');
      bentoTwo.classList.add('strobe');
      table.appendChild(bentoTwo);
      figures.push(bentoTwo);

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'four') {
      tableWrapper.id = "size-one";
      const bentoOne = document.createElement('bento');
      bentoOne.classList.add('strobe');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const plateOne = document.createElement('plate');
      plateOne.className = "table__strobe";
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

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'five') {
      tableWrapper.id = "size-one";
      const bentoOne = document.createElement('bento');
      bentoOne.classList.add('strobe');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const orange = document.createElement('orange');
      orange.style.width="60px";
      bentoOne.appendChild(orange);
      figures.push(bentoOne);

      const plateOne = document.createElement('plate');
      plateOne.className = "table__strobe";
      plateOne.id = "fancy";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const pickle = document.createElement('pickle');
      plateOne.appendChild(pickle);
      figures.push(pickle);

      const plateTwo = document.createElement('plate');
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const pickleTwo = document.createElement('pickle');
      plateTwo.appendChild(pickleTwo);
      figures.push(pickleTwo);
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
      plateOne.className = "table__strobe";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const apple = document.createElement('apple');
      apple.style.width="30px";
      apple.className = "small strobe";
      plateOne.appendChild(apple);
      figures.push(apple);

      const plateTwo = document.createElement('plate');
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

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
      appleSmall.className = "small strobe";
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
      plateOne.className = "table__strobe";
      table.appendChild(plateOne);
      figures.push(plateOne);

      const orangeTwo = document.createElement('orange');
      orangeTwo.style.width="60px";
      plateOne.appendChild(orangeTwo);
      figures.push(orangeTwo);

      const plateTwo = document.createElement('plate');
      plateTwo.className = "table__strobe";
      table.appendChild(plateTwo);
      figures.push(plateTwo);

      const orangeThree = document.createElement('orange');
      orangeThree.style.width="30px";
      orangeThree.className = "small strobe";
      plateTwo.appendChild(orangeThree);
      figures.push(orangeThree);
      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'eight') {
      tableWrapper.id = "size-eight";
      const bentoOne = document.createElement('bento');
      bentoOne.classList.add('strobe');
      table.appendChild(bentoOne);
      figures.push(bentoOne);

      const orange = document.createElement('orange');
      orange.style.width="60px";
      bentoOne.appendChild(orange);
      figures.push(bentoOne);

      const orangeThree = document.createElement('orange');
      orangeThree.style.width="30px";
      orangeThree.className = "small strobe";
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
      appleSmall.className = "small strobe";
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

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'nine') {
      tableWrapper.id = "size-nine";
      const pickle = document.createElement('pickle');
      pickle.style.width="18px";
      pickle.className = "strobe";
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
      pickleThree.className = "strobe";
      table.appendChild(pickleThree);
      figures.push(pickleThree);

      return; //Прерывает выполнение кода    
    }     
  };
  if (event.target instanceof HTMLElement) {
    if (event.target.id === 'ten') {
      tableWrapper.id = "size-ten";
      const appleTwo = document.createElement('apple');
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

      return; //Прерывает выполнение кода    
    }     
  };
}

menuItems.forEach(function(item) {
  item.addEventListener('click', handleClick);
});


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
    }
  });
  element.addEventListener('mouseout', (e) => {
    const targetElement = e.target as HTMLElement | null;
    if (targetElement) {
      tableWindow.textContent = "";
    }
  });
});








