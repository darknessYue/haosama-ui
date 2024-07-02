import {
  onMounted,
  onBeforeUnmount,
  watch,
  isRef,
  unref,
  type MaybeRef,
} from "vue";

export default function useEventListener(
  target: MaybeRef<EventTarget | HTMLElement | void | string>,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      if(typeof oldVal !== 'string') {
        oldVal?.removeEventListener(event, handler);
      }
      if(typeof val !== 'string') {
        val?.addEventListener(event, handler);
      }
    });
  } else {
    onMounted(() => {
      let t = target === 'document' ? document : target;
      if(typeof t !== 'string') {
        return t?.addEventListener(event, handler)
      }
    });
  }

  onBeforeUnmount(() => {
    let t = target === 'document' ? document : target;
    const nt = unref(t)
    if(typeof nt !== 'string') {
      nt?.removeEventListener(event, handler)
    }
  });
}