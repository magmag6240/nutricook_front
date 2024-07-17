'use client';

import React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from "react";
import { User } from './types';
import Link from 'next/link';
import { useAuth } from './provider/AuthProvider';
import styles from './ui/page.module.css';
import { lusitana } from './ui/fonts';


export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.app_title}>

      </div>
    </main>
  )
}
