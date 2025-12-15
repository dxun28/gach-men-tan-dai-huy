import React from 'react';
import { Target, Star, CheckCircle, Package, Truck, MessageCircle, DollarSign, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
          Giới Thiệu Về Tân Đại Huy
        </h1>
        <h2 className="text-xl text-gray-600 font-semibold max-w-4xl mx-auto">
          Đối Tác Đáng Tin Cậy Trong Lĩnh Vực Gạch Ốp Lát & Thiết Bị Nhà Tắm – Nhà Bếp
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
      </div>

      {/* Introduction */}
      <div className="mb-12 text-gray-700 leading-relaxed text-lg">
        <p className="mb-4">
          <span className="font-bold text-primary">Tân Đại Huy</span> là đơn vị chuyên cung cấp gạch lát nền, gạch ốp tường, thiết bị vệ sinh và phụ kiện nhà bếp. 
          Với nhiều năm kinh nghiệm trong ngành vật liệu xây dựng, chúng tôi đã và đang khẳng định vị thế của mình thông qua chất lượng sản phẩm, dịch vụ tận tâm và sự hài lòng của khách hàng.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Tầm Nhìn</h3>
          </div>
          <p className="text-gray-700">
            Tân Đại Huy hướng đến trở thành một trong những nhà cung cấp uy tín hàng đầu tại Việt Nam trong lĩnh vực gạch ốp lát – thiết bị vệ sinh – phụ kiện nhà bếp, mang đến giải pháp toàn diện cho các công trình hiện đại.
          </p>
        </div>
        <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-secondary" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Sứ Mệnh</h3>
          </div>
          <p className="text-gray-700 mb-2">
            Chúng tôi đặt chất lượng và sự hài lòng của khách hàng làm trọng tâm.
          </p>
          <p className="text-gray-700">
            Tân Đại Huy cam kết cung cấp sản phẩm đạt chuẩn, mẫu mã đẹp, độ bền cao nhằm hoàn thiện không gian sống và làm việc một cách tiện nghi, thẩm mỹ và bền vững.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">Giá Trị Cốt Lõi</h3>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Chất lượng đảm bảo</h4>
                <p className="text-gray-600">Tất cả sản phẩm tại Tân Đại Huy đều được tuyển chọn từ các thương hiệu uy tín, trải qua quy trình kiểm tra khắt khe trước khi phân phối đến khách hàng.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
              <MessageCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Dịch vụ tận tâm</h4>
                <p className="text-gray-600">Đội ngũ tư vấn viên giàu kinh nghiệm luôn hỗ trợ khách hàng lựa chọn sản phẩm phù hợp, giải đáp mọi thắc mắc một cách nhanh chóng và nhiệt tình.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
              <DollarSign className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Giá cả cạnh tranh</h4>
                <p className="text-gray-600">Chúng tôi cam kết cung cấp sản phẩm giá tốt – không qua trung gian, đảm bảo tối ưu chi phí cho khách hàng.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
              <ShieldCheck className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Minh bạch và uy tín</h4>
                <p className="text-gray-600">Giá cả, thông tin sản phẩm đều được công khai rõ ràng, không phát sinh chi phí ẩn, giúp khách hàng yên tâm khi lựa chọn Tân Đại Huy.</p>
              </div>
            </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 uppercase">Danh Mục Sản Phẩm Chính</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Package size={32} />
            </div>
            <h4 className="font-bold text-lg mb-3">Gạch lát nền – Gạch ốp tường</h4>
            <p className="text-gray-600 text-sm">Đa dạng kích thước và mẫu mã, phù hợp cho mọi không gian như phòng khách, phòng bếp, phòng tắm, nhà ở, showroom…</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <Package size={32} />
            </div>
            <h4 className="font-bold text-lg mb-3">Thiết bị vệ sinh</h4>
            <p className="text-gray-600 text-sm">Bồn cầu, lavabo, vòi nước, sen tắm, phụ kiện phòng tắm… Sản phẩm chất lượng cao, thiết kế hiện đại, đáp ứng mọi tiêu chuẩn sử dụng.</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
              <Package size={32} />
            </div>
            <h4 className="font-bold text-lg mb-3">Phụ kiện nhà bếp</h4>
            <p className="text-gray-600 text-sm">Chậu rửa, vòi rửa, phụ kiện inox, linh kiện lắp đặt…</p>
          </div>
        </div>
      </div>

      {/* Support Policy */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-secondary pl-4">Chính Sách Hỗ Trợ Khách Hàng</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors bg-white">
            <MessageCircle className="text-primary mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2">Báo giá nhanh chóng</h4>
            <p className="text-gray-600">Cung cấp báo giá chi tiết theo từng mẫu sản phẩm mà khách hàng quan tâm.</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors bg-white">
            <Truck className="text-primary mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2">Hỗ trợ vận chuyển</h4>
            <p className="text-gray-600">Giao hàng nhanh chóng, đảm bảo sản phẩm nguyên vẹn khi đến tay khách hàng.</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors bg-white">
            <MessageCircle className="text-primary mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2">Tư vấn từ A–Z</h4>
            <p className="text-gray-600">Đồng hành cùng khách hàng từ khâu chọn mẫu cho đến hoàn thiện công trình.</p>
          </div>
        </div>
      </div>

      {/* Commitment & Call to Action */}
      <div className="bg-primary text-white p-8 rounded-xl text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Cam Kết Của Tân Đại Huy</h3>
        <p className="mb-6 max-w-3xl mx-auto text-lg opacity-90">
          Tân Đại Huy không ngừng nỗ lực nâng cao chất lượng sản phẩm và dịch vụ, đảm bảo mỗi sản phẩm trao đến khách hàng đều là giải pháp tốt nhất cho ngôi nhà và công trình của bạn.
        </p>
        <div className="w-full h-px bg-white/30 my-6"></div>
        <h3 className="text-2xl font-bold mb-4">Kết Nối Với Tân Đại Huy</h3>
        <p className="mb-6 text-lg">
          Hãy đến với Tân Đại Huy để khám phá các dòng gạch ốp lát – thiết bị vệ sinh – phụ kiện nhà bếp chất lượng, giúp nâng tầm không gian sống của bạn.
        </p>
        <p className="text-xl md:text-2xl font-bold text-yellow-300 uppercase tracking-wider animate-pulse">
          Tân Đại Huy – Chất lượng vững bền, dịch vụ tận tâm!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;