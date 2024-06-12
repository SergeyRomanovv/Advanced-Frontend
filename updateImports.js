const fs = require('fs');
const path = require('path');

// Путь к корню проекта
const rootDir = path.join(__dirname, 'src');

// Функция для рекурсивного обхода всех файлов в директории
function updateImports(directory) {
    fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            updateImports(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const updatedContent = content.replace(/shared\/const\/localstorage/g, 'shared/const/localStorage');

            if (updatedContent !== content) {
                fs.writeFileSync(fullPath, updatedContent, 'utf8');
                console.log(`Updated imports in ${fullPath}`);
            }
        }
    });
}

// Запуск функции обновления импортов
updateImports(rootDir);
