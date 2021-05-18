import React from "react";
import logo from "../Asset/AboutUs/nen_trong.png";

export default function AboutUS() {
  return (
    <div id="aboutus" className="aboutUs container text-center">
      <div className="pb-4 contentProduct">
        <h1 className="">About us</h1>
      </div>
      
      <div className="bgAbout" style={{marginTop:'50px'}}>
        <img className="logoAbout" src={logo} />
      </div>
      <div className="abouUsContent">
        <p>
          Avocado được sáng lập với niềm đam mê sắc đẹp, làm đẹp và lối sống
          healthy
        </p>
        <p>
          Avocado có thể cùng mọi người chia sẻ những thông tin về sức khỏe,
          thời trang, xu hướng làm đẹp mới nhất và cả lối sống khỏe mạnh,văn
          minh. Avocado tin rằng phụ nữ là luôn phải đẹp.Đẹp từ trong ra
          ngoài,từ trên xuống dưới. Và những sản phẩm tốt sẽ giúp mình đẹp hơn.
          Bên cạnh việc mang đến những sản phẩm dược mỹ phẩm,thực phẩm chức
          năng,.. thì Avocado cũng sẽ thường xuyên update những bài viết mới
          nhất về Beauty,Fashion,Work-out,Lifestyle,...cho các chị em cùng tham
          khảo ạ.
        </p>
        <p>
          Avocado xin cam kết 100% các sản phẩm mà chúng mình mang tới đều là
          hàng chính hãng,có đầy đủ Bill đi kèm và giá thành luôn ở mức hợp lý
          nhẩt. Lời cuối,Avocado luôn đặt uy tín và sự hài lòng của các bạn lên
          hàng đầu.Nếu mọi người cần 1 người bạn,1 seller có tâm,1 nơi để đặt
          niềm tin mua sắm thì đừng ngần ngại Inbox cho chúng mình nhé.
        </p>
      </div>
    </div>
  );
}
