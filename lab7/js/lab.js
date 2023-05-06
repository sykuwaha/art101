// Author: Alexis Huang and Scott Kuwahara
// Date: 3 May

function sortUsername() {
    var userName = window.prompt("GIVE ME YOUR NAME OR ELSE.");
    console.log("userName = ", userName);
    
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

document.writeln("I fixed your name: ", sortUsername(), "</br>");