import { TPreviewDeviceType } from '@/types/common.type';
import { create } from 'zustand';

type TStore = {
  type: TPreviewDeviceType;
  setType: (type: TPreviewDeviceType) => void;
};

const usePreviewDeviceTypeStore = create<TStore>((set) => ({
  type: 'smartphone',
  setType: (type) => set({ type }),
}));

export default usePreviewDeviceTypeStore;
