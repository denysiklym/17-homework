let groupList = [
    { id: 1, name: "Дмитро", marks: [] },
    { id: 2, name: "Едуард", marks: [] },
    { id: 3, name: "Андрій", marks: [] },
    // інші студенти
];

function addMark(studentId, mark) {
    const student = groupList.find(student => student.id === studentId);
    if (student) {
        if (!student.marks.includes(mark)) {
            student.marks.push(mark);
            console.log(`Оцінка ${mark} додана для ${student.name}`);
        } else {
            console.log(`Оцінка ${mark} вже існує для ${student.name}`);
        }
    } else {
        console.log("Студента з таким ID не знайдено.");
    }
}

function showGroupList() {
    console.log("Список учасників групи:");
    groupList.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name}: ${student.marks.join(', ') || 'немає оцінок'}`);
    });
}

addMark(1, 5);
addMark(2, 4);
addMark(3, 3);

showGroupList();