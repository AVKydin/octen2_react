import React, {FormEvent, useState} from 'react';

interface IPostProps {
    userId: number,
    title: string,
    body: string
}

const FormPost = () => {

    const [form, setForm] = useState<IPostProps>({userId: 1, body:"cvxvx", title:'rqee'})

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setForm({...form, [input.name]: input.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.title} onChange={handleChange}/>
                <input type="text" value={form.userId} onChange={handleChange}/>
                <input type="text" value={form.body} onChange={handleChange}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormPost;
