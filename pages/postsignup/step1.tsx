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
			city: Yup.string().required('Это обязательное поле'),
			contact: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => undefined,
	})

	return (
		<PostSignupLayout activeStep={0} onSkip={() => undefined}>
			<div className='mt-10 px-28'>
				<p className='font-semibold text-primary'>
					Шаг 1/3
				</p>
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
					<div className='relative'>
						<Input
							onClick={() => setShowCalendar((prev) => !prev)}
							className={'w-full ' + (formik.submitCount && formik.errors.birthday ? 'mb-4' : '')}
							placeholder='Дата рождения'
							value={formik.values.birthday && format(formik.values.birthday, 'dd.MM.yyyy')}
							onChange={(e) => {
								e.target.value = '';
							}}
							errorMessage={formik.submitCount ? formik.errors.birthday : undefined} />
						{showCalendar && (
							<Calendar
								color='#336BEA'
								className='absolute right-0 top-10 z-10'
								locale={ru}
								onChange={(date) => {
									setShowCalendar(false);
									formik.setFieldValue('birthday', date);
								}}
								date={formik.values.birthday} />
						)}
					</div>
					<Select
						errorMessage={formik.submitCount ? formik.errors.city : ''}
						isLazyLoad
						results={10}
						placeholder='Город'
						noOptionsMessage={() => 'Ничего не найдено -_-'}
						value={formik.values.city ? { value: formik.values.city, label: formik.values.city } : undefined}
						onChange={(value) => formik.setFieldValue('city', value)}
						options={Regions.map((i) => ({ value: i.city, label: i.city }))} />
					<Input
						placeholder='Контакт, ник в Telegram @'
						name='contact'
						onChange={formik.handleChange}
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
