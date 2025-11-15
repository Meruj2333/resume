    let count = 0;
    const taskListEl = document.querySelector("#taskList");

    function addTask() {
    count++;

    taskListEl.insertAdjacentHTML("beforeend", `
        <div class="row mb-3 align-items-center">
            <div class="col-4">
                <input type="text" class="form-control names" placeholder="Անվանում ${count}">
            </div>
            <div class="col-3">
                <input type="number" class="form-control times" placeholder="Ժամ ${count}" min="0">
            </div>
            <div class="col-3">
                <input type="checkbox" class="form-check-input done mt-2" id="done-${count}">
                <label for="done-${count}">Կատարված է</label>
            </div>
        </div>
    `);
}

    function check() {
    const result = {
    count: 0,
    time: 0,
    done: 0,
    avg: 0
};

    const names = document.querySelectorAll(".names");
    const times = document.querySelectorAll(".times");
    const dones = document.querySelectorAll(".done");

    for (let i = 0; i < names.length; i++) {
    if (!names[i].value || !times[i].value)
        continue;
    result.count++;
    if (dones[i].checked) {
    result.done++;
    result.time += +(times[i].value);
}
}

    result.avg = result.done / result.count * 100

    document.querySelector("#result").innerHTML = `
        <p> task count${result.count}<br>
        done--- ${result.done}(${result.avg}%)<br>
        time---${result.time} hour</p>
    `;
}

    addTask();
