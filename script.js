// Fonction pour récupérer les tâches du localStorage (R-READ)
function getTasks() {
    // Tente de récupérer les données 'tasks' ou renvoie un tableau vide si rien n'existe
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

// Fonction pour sauvegarder le tableau complet de tâches (Mise à jour du stockage)
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Fonction pour crée l'élément HTML d'une tâche
function createTaskElement(task) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.dataset.id = task.id; // Stocke l'ID dans l'élément HTML

    // Affichage du titre
    // (CORRECTION SÉCURITÉ : on utilise textContent au lieu de innerHTML)
    const titleP = document.createElement('p');
    titleP.textContent = task.title;
    taskCard.appendChild(titleP);

    // Création des boutons (CORRECTION : plus de onclick inline)
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    // Bouton Avancer (si pas terminé)
    if (task.status !== 'Terminé') {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Avancer';
        nextBtn.onclick = () => nextStatus(task.id);
        actionsDiv.appendChild(nextBtn);
    }

    // Bouton Supprimer
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer (D)';
    deleteBtn.onclick = () => deleteTask(task.id);
    actionsDiv.appendChild(deleteBtn);

    taskCard.appendChild(actionsDiv);

       // Petit style basé sur le statut
    if (task.status === 'Terminé') {
        taskCard.style.backgroundColor = '#82ea9aff'; // Vert
    } else if (task.status === 'En Cours') {
        taskCard.style.backgroundColor = '#fcf47eff'; // Jaune
    } else {
        // Par défaut (pour "À Faire")
        taskCard.style.backgroundColor = '#f98b96ff'; // Rouge
    }


    return taskCard;
}

// Fonction principale de rendu des tâches
function renderTasks() {
    const tasks = getTasks(); // On récupère toutes les tâches

    // 1. Vider les colonnes avant de les remplir à nouveau
    document.getElementById('todo-column').innerHTML = '<h3>📚À réviser</h3>';
    document.getElementById('inprogress-column').innerHTML = '<h3>🤓En cours</h3>';
    document.getElementById('done-column').innerHTML = '<h3>🥳Terminé</h3>';

    // 2. Parcourir et trier
    tasks.forEach(task => {
        const element = createTaskElement(task);
        if (task.status === 'À réviser') {
            document.getElementById('todo-column').appendChild(element);
        } else if (task.status === 'En Cours') {
            document.getElementById('inprogress-column').appendChild(element);
        } else if (task.status === 'Terminé') {
            document.getElementById('done-column').appendChild(element);
        }
    });
}

// APPEL INITIAL : On affiche les tâches dès que la page est chargée
document.addEventListener('DOMContentLoaded', renderTasks);

// Écoute l'événement de soumission du formulaire (C - CREATE)
const taskForm = document.getElementById('task-form');
if (taskForm) {
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche la page de se recharger

        const titleInput = document.getElementById('task-title');
        const newTitle = titleInput.value.trim();

        if (newTitle) {
            const tasks = getTasks();
            const newTask = {
                id: Date.now(), // ID unique simple
                title: newTitle,
                status: 'À réviser'
            };

            tasks.push(newTask); // Ajoute la nouvelle tâche au tableau
            saveTasks(tasks);    // Sauvegarde le tableau mis à jour
            
            titleInput.value = ''; // Réinitialise l'input
            renderTasks();         // Met à jour l'affichage
        }
    });
}

// Fonction pour passer au statut suivant (U - UPDATE)
function nextStatus(taskId) {
    let tasks = getTasks();

    // Parcourir le tableau pour trouver la tâche à modifier
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            // Logique de changement de statut
            if (task.status === 'À réviser') {
                task.status = 'En Cours';
            } else if (task.status === 'En Cours') {
                task.status = 'Terminé';
            }
        }
        return task;
    });

    saveTasks(tasks);
    renderTasks(); // Rafraichit l'affichage
}

// Fonction pour supprimer une tâche (D - DELETE)
function deleteTask(taskId) {
    const tasks = getTasks();
    
    // Filtrer : conserve uniquement les tâches dont l'ID est différent du taskID à supprimer
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    saveTasks(updatedTasks);
    renderTasks(); // Rafraichit l'affichage
}
