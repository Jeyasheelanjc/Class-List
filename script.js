var buttonadd = document.getElementById("add")
buttonadd.addEventListener('click', () => {
    buttonadd.classList.add('button-add')
    buttonadd.textContent = "button Added"
})

var buttonremove = document.getElementById("remove")
buttonremove.addEventListener('click', () => {
    buttonremove.classList.remove('button-remove')
})

var buttontoggle = document.getElementById("btn-3")
buttontoggle.addEventListener('click', () => {
    buttontoggle.classList.toggle('second')
})

var buttoncontains = document.getElementById("contains")
buttoncontains.addEventListener('click', () => {
    var content = prompt("Enter the class name")
    let x = buttoncontains.classList.contains(content)
    // alert("The button class is present") = x
    document.getElementById("demo").innerHTML = x
})

var box = document.getElementById("replace")
box.addEventListener('click', () => {
    box.classList.replace('myStyle', 'newStyle')
})
