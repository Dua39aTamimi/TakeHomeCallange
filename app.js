const rows = document.getElementById('usersID');
const inner =document.querySelector('.inner');

let url= 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let users = data;
          for(let i =0; i< users.length; i++){
            if(i == (users.length-1)){
                let id = `${users[i].userId}`;
                let row = document.createElement('tr');
                
                let td = document.createElement('td');
                
                td.onclick = function(){
                    let u = url +"?userId="+id;
                    document.querySelector(".details").style.display = "block";
                    fetch(u)
                    .then((res) => res.json())
                    .then((json) => {
                        let user = json;
                       
                      user.map(function(use) {
                        let title = document.createElement('h3');
                        let body = document.createElement('p');
                        title.innerHTML = `${use.title}`;
                        body.innerHTML = `${use.body}`;
                        inner.appendChild(title);
                        inner.appendChild(body);
                      });
                
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                   
                };
                td.innerHTML = id;
                row.appendChild(td);
                rows.appendChild(row);
               break;
                
            }
            else if(  `${users[i].userId}`!=`${users[i+1].userId}`){
                let id = `${users[i].userId}`;
                let row = document.createElement('tr');
                let td = document.createElement('td');
                
                
                td.onclick = function(){
                  let u = url +"?userId="+id;
                  document.querySelector(".details").style.display = "block";
              
                  fetch(u)
                  .then((res) => res.json())
                  .then((json) => {
                      let user = json;
                     
                    user.map(function(use) {
                      let title = document.createElement('h3');
                      let body = document.createElement('p');
                      title.innerHTML = `${use.title}`;
                      body.innerHTML = `${use.body}`;
                      inner.appendChild(title);
                      inner.appendChild(body);
                    });
              
                  })
                  .catch(function(error) {
                      console.log(error);
                  });
                
              };

                td.innerHTML = id;
                row.appendChild(td);
                rows.appendChild(row);
            }
          }
    })
    .catch(function(error) {
        console.log(error);
      });

      function hide(){
        document.querySelector(".details").style.display ="none";
        while (inner.firstChild) {
          inner.removeChild(inner.firstChild)
        }
        
        let btn = document.createElement("button");

        btn.classList.add("cancel");
        btn.textContent = "X";
        btn.onclick = hide;
        inner.appendChild(btn);
    }