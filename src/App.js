import { Flex, Text, Button } from '@radix-ui/themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

export default function MyApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={"首页"}/>
        <Route  path="/documents" element={"技术文档"}/>
        <Route  path="/blogs" element={"技术博客"}/>
      </Routes>
    </BrowserRouter>
  );
}