'use client';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className='border-2 border-gray-400 hover:bg-gray-200 rounded-full py-1 px-3 mr-3 transition duration-700 ease-in-out'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent appearance-none text-base font-medium text-center cursor-pointer focus:outline-none'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>EN</option>
        <option value='ru'>RU</option>
      </select>
    </label>
  );
}
