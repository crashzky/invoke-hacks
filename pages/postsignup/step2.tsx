import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '@components/common/Button';
import Select from '@components/common/Select';
import PostSignupLayout from '@layouts/PostSignupLayout';

import Professions from '@/data/professions.json';
import TagsPeeker from '@/components/common/TagsPeeker';

interface IFormik {
	specialization: string;
	skills: string[];
}

const PostSignupPage2 = (): JSX.Element => {
	const formik = useFormik<IFormik>({
		initialValues: {
			specialization: '',
			skills: [],
		},
		validationSchema: Yup.object({}).shape({
			specialization: Yup.object().required('Это обязательное поле'),
		}),
		onSubmit: () => undefined,
	})

	return (
		<PostSignupLayout 
			activeStep={1} 
			onSkip={() => undefined}
			onRouteBack={() => undefined}
		>
			<div className='mt-10 px-28'>
				<h1 className='text-heading-1 mt-3'>
					Специализация
				</h1>
				<form onSubmit={formik.handleSubmit} className='mt-6 grid gap-[14px] max-w-[420px]'>
					<Select
						isLazyLoad
						placeholder='Специализация'
						noOptionsMessage={() => 'Ничего не найдено -_-'}
						options={Professions.map((i) => ({ value: i, label: i }))}
						value={formik.values.specialization}
						onChange={(newValue) => formik.setFieldValue('specialization', newValue)}
						errorMessage={formik.submitCount ? formik.errors.specialization : undefined} />
					<TagsPeeker 
						tags={formik.values.skills} 
						placeholder='Скиллы'
						onDeleteTag={(tagId) => formik.values.skills.splice(tagId, 1)}
						setTags={(newTag) => formik.setFieldValue('skills', formik.values.skills.concat([newTag]))} />
					<Button variant='filled' color='black'>
						Продолжить
					</Button>
				</form>
			</div>
		</PostSignupLayout>
	);
};

export default PostSignupPage2;
