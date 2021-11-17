import { makeVar } from '@apollo/client/core';
import { Rate } from './queries';

export const selectedRatesRV = makeVar<Rate[]>([]);