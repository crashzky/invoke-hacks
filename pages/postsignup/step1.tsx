import { useState } from 'react';
import { Calendar } from 'react-date-range';
import { ru } from 'date-fns/locale';
import { useFormik } from 'formik';
import { format } from 'date-fns'; 
import * as Yup from 'yup';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Select from '@components/common/Select';
import PostSignupLayout from '@layouts/PostSignupLayout';

import Regions from '@/data/regions.json';
import DatePicker from '@/components/common/DatePicker';

interface IFormik {
	name: string;
	surname: string;
	birthday: Date | undefined;
	city: string;
	contact: string;
}

const PostSignupPage1 = (): JSX.Element => {
	const [showCalendar, setShowCalendar] = useState(false);

	const formik = useFormik<IFormik>({
		initialValues: {
			name: '',
			surname: '',
			birthday: undefined,
			city: '',
			contact: '',
		},
		validationSchema: Yup.object({}).shape({
			name: Yup.string().required('Это обязательное поле'),
			surname: Yup.string().required('Это обязательное поле'),
			birthday: Yup.date().required('Это обязательное поле'),
			city: Yup.object().required('Это обязательное поле'),
			contact: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => undefined,
	})

	return (
		<PostSignupLayout
			activeStep={0} 
			onSkip={() => undefined}
			onRouteBack={() => undefined}
		>
			<div className='mt-10 px-28'>
				<h1 className='text-heading-1 mt-3'>
					Основные данные
				</h1>
				<form onSubmit={formik.handleSubmit} className='mt-6 grid gap-[14px] max-w-[420px]'>
					<Input
						placeholder='Имя'
						name='name'
						onChange={formik.handleChange}
						value={formik.values.name}
						errorMessage={formik.submitCount ? formik.errors.name : undefined} />
					<Input
						placeholder='Фамилия'
						name='surname'
						onChange={formik.handleChange}
						value={formik.values.surname}
						errorMessage={formik.submitCount ? formik.errors.surname : undefined} />
					<DatePicker
						placeholder='Дата рождения'
						onChange={(date) => formik.setFieldValue('birthday', date)}
						errorMessage={formik.submitCount ? formik.errors.birthday : undefined}
						value={formik.values.birthday} />
					<Select
						errorMessage={formik.submitCount ? formik.errors.city : ''}
						isLazyLoad
						results={10}
						placeholder='Город'
						noOptionsMessage={() => 'Ничего не найдено -_-'}
						value={formik.values.city || undefined}
						onChange={(value) => formik.setFieldValue('city', value)}
						options={Regions.map((i) => ({ value: i.city, label: i.city }))} />
					<Input
						placeholder='Контакт, ник в Telegram @'
						name='contact'
						onChange={(e) => {
							if (e.target.value.length === 1 && e.target.value != '@')
								formik.setFieldValue('contact', `@${e.target.value}`)
							else
								formik.handleChange(e)
						}}
						value={formik.values.contact}
						errorMessage={formik.submitCount ? formik.errors.contact : undefined}  />
					<Button variant='filled' color='black'>
						Продолжить
					</Button>
				</form>
			</div>
		</PostSignupLayout>
	);
};

export default PostSignupPage1;
