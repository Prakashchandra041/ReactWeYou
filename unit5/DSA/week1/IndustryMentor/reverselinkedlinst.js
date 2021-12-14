let curr = head;
let next = null;
let pre = null;
while (curr) {
    next = curr.next;
    curr.next = pre;
    pre=curr;
}
return pre;