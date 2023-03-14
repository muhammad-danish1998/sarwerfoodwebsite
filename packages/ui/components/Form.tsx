import { useForm } from 'react-hook-form';

export type TForm<T extends Record<string, any> = Record<string, any>> = {
	defaultValues?: T;
	formNode: (form: ReturnType<typeof useForm>) => JSX.Element;
	onSubmit: (args: any) => void;
};
export const Form = ({ defaultValues = {}, formNode, onSubmit }: TForm) => {
	const form = useForm({ defaultValues });

	return <form onSubmit={form.handleSubmit(onSubmit)}>{formNode({ ...form })}</form>;
};
