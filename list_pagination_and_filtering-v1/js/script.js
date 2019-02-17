/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentsList = document.getElementsByClassName('student-item cf');
const mainDiv = document.querySelector('.page');

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page = 1) => {
   const higher = page * 10 - 1;
   // console.log(higher); 
   const lower = page * 10 - 10;
   // console.log(lower);
   for (let i = 0; i < list.length; i++) {
      if (i >= lower && i <= higher) {
         // console.log('im displayed');
         list[i].style.display = 'block';

      } else {
         // console.log('im hidden');
         list[i].style.display = 'none';
      }
   }
   
}

showPage(studentsList);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   let maxPage = Math.ceil(list.length / 10);
   // console.log(maxPage);
   let pagination = document.createElement('div');
   pagination.className = 'pagination';
   mainDiv.appendChild(pagination);
   paginationUl = document.createElement('ul');
   pagination.appendChild(paginationUl);
   
   for (let i = 0; i < maxPage; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const pageNumber = i + 1;
      paginationUl.appendChild(li);
      li.appendChild(a);
      a.textContent = pageNumber;
      const anchorTags = document.querySelectorAll('a');
      console.log(pageNumber)
      if (pageNumber == 1){
         anchorTags[0].className = 'active';
      }
   //   document.onload = anchorTags[0].className = 'active';
   // console.log(anchorTags);
      anchorTags[i].addEventListener('click', (e) => {
         let pageButton = parseInt(anchorTags[i].textContent);
         showPage(studentsList, pageButton);
         console.log(e.target);
         console.log(pageNumber);
         if(pageNumber == 1){
            anchorTags[0].className = 'active';
         } else {anchorTags[0].className = ''}
         if(pageNumber == 2){
            anchorTags[1].className = 'active';
         } else {anchorTags[1].className = ''}
      }  
      );
   }
}  


appendPageLinks(studentsList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
