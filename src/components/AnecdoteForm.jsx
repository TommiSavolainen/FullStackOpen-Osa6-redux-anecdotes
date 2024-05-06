import { useDispatch } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';
const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const createNewAnecdote = (event) => {
        event.preventDefault();
        const content = event.target.new.value;
        event.target.new.value = '';
        dispatch(createNew(content));
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createNewAnecdote}>
                <div>
                    <input name="new" />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;
