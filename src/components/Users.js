import React from 'react';

function Users(props) {
  var usersDivs = null;
  if(props.users){
    var sorted = props.users.sort((a,b) => {
      return a[props.sortOn] > b[props.sortOn];
    });
    usersDivs = sorted.filter(function(u){
      return !props.firstNameFilter || 
      (props.firstNameFilter && 
      u.name.indexOf(props.firstNameFilter) > -1);
    })
    usersDivs = usersDivs.map(function(u){
      return <div>{u.name}</div>
    })
  }
  return (
      <div>
        <h1>Users</h1>
       {usersDivs}
      </div>
  );
}
export default Users;

