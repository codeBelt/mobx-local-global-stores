import dynamic from 'next/dynamic';
import { SignInModal } from './SignInModal';

export const SignInModalDynamic = dynamic(
  () => import('./SignInModal' /* webpackChunkName: "SignInModal" */).then((mod) => mod.SignInModal as any),
  { ssr: false }
) as typeof SignInModal;
