// import { render, screen, fireEvent } from '@testing-library/react';
// import TodoList from '../components/TaskAddCom';
// import TaskList from '../components/TaskCom'
// import '@testing-library/jest-dom';

// describe('TodoList Component', () => {

//     test('add component show button is clicked', () => {
//         render(<TodoList />);
//         const AddButton = screen.getByTestId('add-todo-button');

//         fireEvent.click(AddButton);

//         expect(screen.getByText('New Todo Item')).toBeInTheDocument();
//     });

//     test('deletes todo when delete button is clicked', () => {
//         const mockTodos = [{ id: 1, text: 'Test Todo', completed: false }];
//         render(<TaskList todos={mockTodos} onDelete={() => {}} />);
//         const deleteButton = screen.getByTestId('delete-button');

//         fireEvent.click(deleteButton);

//         expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
//     });

//     test('marks todo as complete when checkbox is clicked', () => {
//         const mockTodos = [{ id: 1, text: 'Test Todo', completed: false }];
//         render(<TaskList todos={mockTodos} onToggle={() => {}} />);
//         const checkbox = screen.getByRole('checkbox');

//         fireEvent.click(checkbox);

//         const todoText = screen.getByTestId('todo-note');
//         expect(todoText).toHaveStyle('text-decoration: line-through');
//     });

// });