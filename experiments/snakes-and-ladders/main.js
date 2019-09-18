function initTable(ladders, snakes) {
  let html = '<ul class="theme-table">';

  for(let i=9; i>=0; i--) {
    html += '<li>'
    for(let j=1; j<=10; j++) {
    let no = 0;
      if(i%2 === 0) {
        no = parseInt((i*10)+j)
      } else {
        no = parseInt((i*10)+(11-j))
      }
      let cellClass = '';
      // debugger
      if(Object.keys(ladders).includes(no+'')) {
      	cellClass = 'green';
      } else if (Object.keys(snakes).includes(no+'')) {
      	cellClass = 'red';
      }
      html += '<span class="cell-'+no+' '+cellClass+'">'+no+'</span>';
    }
    html += '</li>'
  }

  html += '</ul>'

  $('.table-container').html(html)
}

$(document).ready(function() {
	const ladders = {
  	5:35,
    17:43,
    33:67,
    42: 78,
    65:95,  
  }
  const snakes = {
    32:8,
    44:18,
    66:36,
    87:69,
    99:56,  
  }
	const snakeAndLaddersObj = { ...ladders, ...snakes }
  
	initTable(ladders, snakes);
  
  $('.cell-1').addClass('player-1');
  
  $('.dice').click(function() {
  	const number = Math.floor(Math.random() * 6) + 1;
    $(this).text(number);
    
    let activeCell = 0;
    const currentCell = $('.player-1');
    currentCell.removeClass('player-1');
    const cellClass = currentCell.attr('class').split(' ')
    const updatedCellNumber =  parseInt(cellClass[0].split('-')[1]) + number;
   let nextCellNumber= updatedCellNumber;
   if(Object.keys(snakeAndLaddersObj).includes(updatedCellNumber+'')) {
   		let cellClass = '';
      let msg = '';
   		if(Object.keys(ladders).includes(updatedCellNumber+'')) {
      	cellClass = 'green';
        msg = 'Great, you got a ladder !!';
      } else {
      	cellClass = 'red';
        msg = "Ohhh, it's snake";
      }
   		$('.message').show().addClass(cellClass).text(msg);
			nextCellNumber = snakeAndLaddersObj[updatedCellNumber];
    } else {
    	$('.message').hide().removeClass('red green')
    }
    $('.cell-'+nextCellNumber).addClass('player-1')
  })
})
