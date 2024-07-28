document.getElementById('save-note').addEventListener('click', async () => {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();
  
    if (note) {
      try {
        const response = await fetch('/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ note })
        });
  
        if (response.ok) {
          noteInput.value = '';
          alert('Note saved!');
        } else {
          alert('Failed to save note');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error saving note');
      }
    } else {
      alert('Please enter a note');
    }
  });
  
  document.getElementById('list-notes').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/notes');
      const notes = await response.json();
  
      const notesList = document.getElementById('notes-list');
      notesList.innerHTML = '';
  
      notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
          <span>${note.note}</span>
          <button class="delete-note" data-id="${note.id}">Delete</button>
        `;
        notesList.appendChild(noteElement);
      });
  
      document.querySelectorAll('.delete-note').forEach(button => {
        button.addEventListener('click', async (e) => {
          const id = e.target.dataset.id;
  
          try {
            const response = await fetch(`/api/notes/${id}`, {
              method: 'DELETE'
            });
  
            if (response.ok) {
              e.target.parentElement.remove();
              alert('Note deleted!');
            } else {
              alert('Failed to delete note');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error deleting note');
          }
        });
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching notes');
    }
  });
  