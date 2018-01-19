//display correct list of 10 students based on page number
const showPage = (pageNumber,studentList) => {
  //hide full list of students given by inline HTML markup
  studentList.hide();
  //Select appropriate range of names based on pageNumber and display them
  studentList.slice(((pageNumber-1)*10),((pageNumber*10))).show();
};

//allow user to select which page of students to display based on link clicked
const appendPageLinks = (studentList) => {
  //determine how many total pages (of 10 students each) there are for this student list
  const totalPages = Math.ceil(studentList.length/10);
  //create a div for page links
  const $pageLinkSection = $('<div class="pagination">');

  //for every page of 10 students (or less)
  for (i=1;i<=totalPages;i++){
    //concatenation of pageLink strings to loop through [i] correctly
    pageLink = '<li> <a href="#">';
    pageLink += [i];
    pageLink += '</a></li>';
    //append as many consecutive pageLinks needed based on totalPages calculation above
    $pageLinkSection.append(pageLink);
  };

  //append newly created page link section to the site
  $('.page').append($pageLinkSection);

  //click event handler to select specified link as input for showPage()
  $('a').on('click', function(event) {

    //show studentList associated with clicked pageLink
    showPage(event.target.text, $('li'));

    //set class for currently selected anchor link to 'active'
    $(event.delegateTarget).removeClass('active').addClass('active');

    //remove the old page link section from the site to avoid pageLink multiplication
    $pageLinkSection.remove();

    //append the new page link section to the site
    appendPageLinks($('li'));

  });
};
s

//call showPage(); page 1 display by default loads on website load
showPage(1,$('li'));
//call appendPageLinks
appendPageLinks($('li'));
