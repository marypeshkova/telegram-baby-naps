import { useEffect, useState } from 'react';

// Типы для Telegram Web App
interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
      photo_url?: string;
    };
  };
  colorScheme: 'light' | 'dark';
  themeParams: {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive?: boolean) => void;
    hideProgress: () => void;
  };
  BackButton: {
    isVisible: boolean;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
  };
  HapticFeedback: {
    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
    selectionChanged: () => void;
  };
  ready: () => void;
  expand: () => void;
  close: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export function useTelegram() {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramWebApp['initDataUnsafe']['user'] | null>(null);

  useEffect(() => {
    const telegram = window.Telegram?.WebApp;
    
    if (telegram) {
      telegram.ready();
      telegram.expand();
      
      setTg(telegram);
      setUser(telegram.initDataUnsafe.user || null);
    }
  }, []);

  return {
    tg,
    user,
    colorScheme: tg?.colorScheme || 'dark',
    themeParams: tg?.themeParams || {},
  };
}

export function useTelegramMainButton(text: string, onClick: () => void, isActive: boolean = true) {
  const { tg } = useTelegram();

  useEffect(() => {
    if (!tg) return;

    const mainButton = tg.MainButton;
    
    mainButton.setText(text);
    
    if (isActive) {
      mainButton.enable();
      mainButton.show();
    } else {
      mainButton.disable();
    }

    mainButton.onClick(onClick);

    return () => {
      mainButton.offClick(onClick);
      mainButton.hide();
    };
  }, [tg, text, onClick, isActive]);
}

export function useTelegramBackButton(onClick: () => void, show: boolean = false) {
  const { tg } = useTelegram();

  useEffect(() => {
    if (!tg) return;

    const backButton = tg.BackButton;

    if (show) {
      backButton.show();
      backButton.onClick(onClick);
    } else {
      backButton.hide();
    }

    return () => {
      backButton.offClick(onClick);
      backButton.hide();
    };
  }, [tg, onClick, show]);
}

export function useHapticFeedback() {
  const { tg } = useTelegram();

  return {
    light: () => tg?.HapticFeedback.impactOccurred('light'),
    medium: () => tg?.HapticFeedback.impactOccurred('medium'),
    heavy: () => tg?.HapticFeedback.impactOccurred('heavy'),
    selection: () => tg?.HapticFeedback.selectionChanged(),
    success: () => tg?.HapticFeedback.notificationOccurred('success'),
    error: () => tg?.HapticFeedback.notificationOccurred('error'),
    warning: () => tg?.HapticFeedback.notificationOccurred('warning'),
  };
}
